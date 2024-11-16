import TextByLanguage from "./TextByLanguage";
import { selectLanguageValue } from "../../slices/language";
import { useStoreSelector } from "../../hooks";
import type { ImgHTMLAttributes } from "react";

interface Props extends Pick<ImgHTMLAttributes<HTMLElement>, "className" | "src"> {
  alt: TextByLanguage;
}

export default function LanguageImage({ alt, className, src }: Props) {
  const languageValue = useStoreSelector(selectLanguageValue);

  return <img alt={alt.get(languageValue)} className={className} src={src} />;
}
