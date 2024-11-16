import { selectLanguageValue } from "../../slices/language";
import { useStoreSelector } from "../../hooks";
import type { HTMLAttributes } from "react";
import type { LanguageTextProps } from "./LanguageText";

type Props = LanguageTextProps & Pick<HTMLAttributes<HTMLElement>, "className">;

export default function LanguageHeading2({ className, text }: Props) {
  const languageValue = useStoreSelector(selectLanguageValue);

  return <h2 className={className}>{text.get(languageValue)}</h2>;
}
