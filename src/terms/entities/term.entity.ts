import BilingualText from 'src/interfaces/BilingualText';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Term implements BilingualText {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  oldId?: string;

  @Column('text')
  text: string;

  @Column('text')
  textInTranslationLanguage?: string;

  @Column('text', { array: true, default: [] })
  mediaItems: string[] = [];

  @Column('text')
  credits?: string;

  @Column('boolean')
  published: boolean = false;

  @Column('boolean')
  archived: boolean = false;
}
