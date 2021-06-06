import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import repositoryMockFactory from '../../test/mocks/repositories/repositoryMockFactory';
import { Term } from './entities/term.entity';
import { TermsController } from './terms.controller';
import { TermsService } from './terms.service';

describe('TermsController', () => {
  let controller: TermsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TermsController],
      providers: [
        TermsService,
        {
          provide: getRepositoryToken(Term),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    controller = module.get<TermsController>(TermsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
