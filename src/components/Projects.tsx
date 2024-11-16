import SvgIcon from "./SvgIcon";
import { cn } from "../lib/utils";
import {
  LanguageHeading2, LanguageHeading3, LanguageImage, LanguageParagraph, LanguageSpan, TextByLanguage,
} from "./Language";
import type { HTMLAttributes } from "react";

interface Content {
  title: TextByLanguage;
  items: Project[];
  links: { live: TextByLanguage };
}

interface Project {
  imgSrc: string;
  title: TextByLanguage;
  description: TextByLanguage;
  links?: { live?: string };
}

const content: Content = {
  title: new TextByLanguage({ ru: "Проекты", en: "Projects" }),
  items: [
    {
      imgSrc: "https://xn--80aejmawrcgd.xn--p1ai/images/main-image.png",
      title: new TextByLanguage({
        ru: "ПРЕМИИ ПРАВИТЕЛЬСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ",
        en: "PRIZES OF THE GOVERNMENT OF THE RUSSIAN FEDERATION",
      }),
      description: new TextByLanguage({
        ru: "Сайт премий Правительства Российской Федерации",
        en: "Website of the Government of the Russian Federation awards",
      }),
      links: { live: "https://xn--80aejmawrcgd.xn--p1ai/" },
    },
  ],
  links: { live: new TextByLanguage({ ru: "Посмотреть вживую", en: "Watch live" }) },
};

function ProjectCard({ className, item }: Pick<HTMLAttributes<HTMLElement>, "className"> & { item: Project }) {
  return (
    <article className={cn("project-card", className)}>
      <figure className="project-card__figure">
        <LanguageImage alt={item.title} className="project-card__image" src={item.imgSrc} />
      </figure>
      <div className="project-card__info">
        <LanguageHeading3 className="project-card__title" text={item.title} />
        <LanguageParagraph className="project-card__desc" text={item.description} />
        {item.links && (
          <div className="project-card__links">
            {item.links.live && (
              <a className="project-card__link" href={item.links.live} target="_blank">
                <SvgIcon className="project-card__link-icon" name="external" />
                <LanguageSpan className="project-card__link-caption" text={content.links.live} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects">
      <LanguageHeading2 className="projects__title" text={content.title} />
      <div className="projects__cards">
        {content.items.map((item, index) => (
          <ProjectCard className="projects__card" item={item} key={index + 1} />
        ))}
      </div>
    </section>
  );
}
