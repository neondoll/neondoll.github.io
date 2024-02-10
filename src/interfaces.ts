interface Certificate {
    text: TextByLanguage;
    href: string;
}

export type Certificates = Record<string, Certificate>;

export type Content = Record<string, TextByLanguage>;

interface FooterNavItem {
    text: TextByLanguage;
    to: { name: string; }
}

export type FooterNavList = FooterNavItem[];

export type Jobs = Record<string, Job>;

interface Job {
    image: string;
    content: Content;
    responsibilities: Content;
    technology_stack: Record<string, string>;
    tools: Record<string, string>
}

export type Language = 'ru' | 'en';

interface LanguageItem {
    svgUse: string;
    title: string;
    value: Language;
}

export type LanguageList = Record<Language, LanguageItem>;

interface Project {
    image: string;
    title: TextByLanguage;
    description: TextByLanguage;
    links?: {
        live?: string;
    }
}

export type Projects = Record<string, Project>;

interface StackItem {
    imgSrc?: string;
    svgUse?: string;
    title: string;
}

export type StackList = Record<string, StackItem>;

export type Theme = 'light' | 'dark';

type TextByLanguage = Record<Language, string>;