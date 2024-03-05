import {RouteLocationRaw} from 'vue-router';

export interface Certificate {
    text: TextByLanguage;
    to: RouteLocationRaw;
}

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

interface LanguageItem {
    svgUse: string;
    text: string;
    value: Language;
}

export type LanguageList = Record<Language, LanguageItem>;

export interface Project {
    imgSrc: string;
    title: TextByLanguage;
    description: TextByLanguage;
    links?: { live?: string; }
}

export type Projects = Record<string, Project>;

export interface StackItem {
    imgSrc?: string;
    svgUse?: string;
    text: string;
}

export type Theme = 'light' | 'dark';

export type TextByLanguage = Record<Language, string>;