import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTermDto } from './dto/create-term.dto';
import { UpdateTermDto } from './dto/update-term.dto';
import { Term } from './entities/term.entity';

@Injectable()
export class TermsService {
  constructor(
    @InjectRepository(Term)
    private termsRepository: Repository<Term>,
  ) {}

  create(createTermDto: CreateTermDto) {
    const newTerm = this.termsRepository.create(createTermDto);

    this.termsRepository.insert(createTermDto);

    console.log({
      message: 'create term',
      newTerm,
    });
    return newTerm;
  }

  findAll() {
    return this.termsRepository.find();
  }

  findOne(id: number) {
    return this.termsRepository.findOne(id);
  }

  update(id: number, updateTermDto: UpdateTermDto) {
    return this.termsRepository.update(id, updateTermDto).then(
      (_) => console.log('success'),
      (reason) => console.log(`failed for reason ${reason}`),
    );
  }

  remove(id: number) {
    // Data is never deleted, only archived.
    const dtoToSetResourceAsArchived = {
      archived: true,
    };
    return this.termsRepository.update(id, dtoToSetResourceAsArchived);
  }
}
