import { Link } from "react-router-dom";
import { selectLanguageValue } from "../../slices/language";
import { useStoreSelector } from "../../hooks";
import type { LanguageTextProps } from "./LanguageText";
import type { LinkProps } from "react-router-dom";

type Props = LanguageTextProps & Pick<LinkProps, "className" | "target" | "to">;

export default function LanguageLink({ className, target, text, to }: Props) {
  const languageValue = useStoreSelector(selectLanguageValue);

  return <Link className={className} target={target} to={to}>{text.get(languageValue)}</Link>;
}
