import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section data-slot="about">
      <h2
        children={t("about.heading")}
        className="mb-8 text-[clamp(2rem,4vw,3rem)] font-black text-center"
        data-slot="about-title"
      />
      <div className="flex flex-col gap-4 items-start" date-slot="about-container">
        <p
          children={t("about.p1")}
          className="text-[clamp(1.125rem,2vw,1.25rem)] leading-normal text-justify"
          data-slot="about-text"
        />
        <p
          children={t("about.p2")}
          className="text-[clamp(1.125rem,2vw,1.25rem)] leading-normal text-justify"
          data-slot="about-text"
        />
        <p
          children={t("about.p3")}
          className="text-[clamp(1.125rem,2vw,1.25rem)] leading-normal text-justify"
          data-slot="about-text"
        />
        <p
          className="text-[clamp(1.125rem,2vw,1.25rem)] leading-normal text-justify"
          dangerouslySetInnerHTML={{ __html: t("about.languages") }}
          data-slot="about-text"
        />
      </div>
    </section>
  );
};
