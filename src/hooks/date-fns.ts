import { type DateArg, format, formatDistance, type FormatDistanceOptions, type FormatOptions } from "date-fns";
import { enUS, ru } from "date-fns/locale";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useDateFns = () => {
  const { i18n } = useTranslation();

  const locale = useMemo(() => {
    switch (i18n.language) {
      case "ru":
        return ru;
      case "en":
        return enUS;
      default:
        return undefined;
    }
  }, [i18n.language]);
  const formatDate = useCallback((date: DateArg<Date>, formatStr: string, options?: FormatOptions) => {
    return format(date, formatStr, { locale, ...options });
  }, [locale]);
  const formatDistanceDates = useCallback((laterDate: DateArg<Date>, earlierDate: DateArg<Date>, options?: FormatDistanceOptions) => {
    return formatDistance(laterDate, earlierDate, { locale, ...options });
  }, [locale]);

  return {
    formatDate,
    formatDistanceDates,
    locale,
  };
};
