export class CreateTermDto {
  oldId?: string;

  text: string;

  textInTranslationLanguage?: string;

  mediaItems?: string[];

  credits?: string;

  published?: boolean;

  archived?: boolean;
}
