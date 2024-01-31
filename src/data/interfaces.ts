interface Certificate {
    text: TextLine;
    href: string;
}

export type Certificates = Record<string, Certificate>;

export type Content = Record<string, TextLine>;

export type Jobs = Record<string, Job>;

interface Job {
    image_class: string;
    content: Content;
    responsibilities: Content;
    technology_stack: Record<string, string>;
    tools: Record<string, string>
}

export type LanguageType = "ru" | "en";

export interface Language {
    image: string;
    title: string;
    value: LanguageType;
}

export type ThemeType = "light" | "dark";

export interface TextLine {
    ru: string;
    en: string;
}