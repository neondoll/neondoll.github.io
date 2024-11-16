import type { Language } from "../../slices/language";

export default class TextByLanguage {
  constructor(protected text: Record<Language, string>) {}

  get(language: Language) { return this.text[language]; }
}
