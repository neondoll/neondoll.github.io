import type { TextByLanguage } from './language';

export interface Job {
  imgSrc: string;
  title: TextByLanguage;
  company: TextByLanguage;
  employmentForm: TextByLanguage;
  startDate: string;
  endDate?: string;
  address: TextByLanguage;
  responsibilities: TextByLanguage[];
  technologyStack: Record<string, string>;
  tools: Record<string, string>;
}
