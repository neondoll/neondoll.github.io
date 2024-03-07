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

export type Language = 'ru' | 'en';

export interface Project {
    imgSrc: string;
    title: TextByLanguage;
    description: TextByLanguage;
    links?: { live?: string; }
}

export interface StackItem {
    imgSrc?: string;
    svgUse?: string;
    text: string;
}

export type Theme = 'light' | 'dark';

export type TextByLanguage = Record<Language, string>;