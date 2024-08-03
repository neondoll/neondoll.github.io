import type { TextByLanguage } from './language';

export interface Project {
  imgSrc: string;
  title: TextByLanguage;
  description: TextByLanguage;
  links?: { live?: string };
}
