import {RouteLocationRaw} from 'vue-router';

interface Certificate {
    text: TextByLanguage;
    to: RouteLocationRaw;
}

export type Certificates = Record<string, Certificate>;

interface ContactItem {
    link: string;
    svgUse: string;
    text: string;
}

export type ContactList = Record<string, ContactItem>;

export type Content = Record<string, TextByLanguage>;

interface FooterNavItem {
    text: TextByLanguage;
    to: RouteLocationRaw;
}

export type FooterNavList = Record<string, FooterNavItem>;

export type Jobs = Record<string, Job>;

interface Job {
    content: Content;
    imgSrc: string;
    responsibilities: Content;
    technologyStack: Record<string, string>;
    tools: Record<string, string>
}

export type Language = 'ru' | 'en';

interface LanguageItem {
    svgUse: string;
    text: string;
    value: Language;
}

export type LanguageList = Record<Language, LanguageItem>;

interface Project {
    imgSrc: string;
    title: TextByLanguage;
    description: TextByLanguage;
    links?: { live?: string; }
}

export type Projects = Record<string, Project>;

interface StackItem {
    imgSrc?: string;
    svgUse?: string;
    text: string;
}

export type StackList = Record<string, StackItem>;

export type Theme = 'light' | 'dark';

type TextByLanguage = Record<Language, string>;