interface Certificate {
    text: TextLine;
    href: string;
}

export type Certificates = Record<string, Certificate>;

export type Content = Record<string, TextLine>;

interface Image {
    src: string;
    alt: string;
}

export type Jobs = Record<string, Job>;

interface Job {
    image: Image;
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

interface TextLine {
    ru: string;
    en: string;
}