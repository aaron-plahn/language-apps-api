import { Term } from 'src/terms/entities/term.entity';

const termDefaults: Term = {
  id: 'testTermId',
  oldId: 'testOldId',
  text: 'testTermTextInLanguage',
  textInTranslationLanguage: 'testTermTranslation',
  mediaItems: ['testmediaurl.com'],
  credits: 'testTermCredits',
  published: true,
  archived: false,
};

export const getMockTerm = (overrides: Term): Term => ({
  ...termDefaults,
  ...overrides,
});
