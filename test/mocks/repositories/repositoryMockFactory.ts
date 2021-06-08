import { Repository } from 'typeorm';

const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn((entity) => entity),
  findMany: jest.fn((entities) => entities),
  create: jest.fn((entity) => entity),
  update: jest.fn((entity) => entity),
  delete: jest.fn((entity) => entity),
}));

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export default repositoryMockFactory;
