import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import repositoryMockFactory, {
  MockType,
} from '../../test/mocks/repositories/repositoryMockFactory';
import { Term } from './entities/term.entity';
import { TermsService } from './terms.service';

describe('TermsService', () => {
  let service: TermsService;
  let repositoryMock: MockType<Repository<Term>>;

  beforeEach(async () => {
    console.log(`repositoryMockFactory:`);
    console.log(typeof repositoryMockFactory);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TermsService,
        {
          provide: getRepositoryToken(Term),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    service = module.get<TermsService>(TermsService);
    repositoryMock = module.get(getRepositoryToken(Term));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
