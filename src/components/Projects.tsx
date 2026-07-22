import type { FC, HTMLAttributes } from "react";

import { SvgIcon } from "./svg-icon";
import { cn } from "../lib/utils";

type Project = { imgSrc: string; title: string; description: string; links?: { live?: string } };

const PROJECTS: Project[] = [
  {
    imgSrc: "https://xn--80aejmawrcgd.xn--p1ai/images/vLNeyfu9vI 1.png",
    title: "ПРЕМИИ ПРАВИТЕЛЬСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ",
    description: "Сайт премий Правительства Российской Федерации",
    links: { live: "https://xn--80aejmawrcgd.xn--p1ai" },
  },
];

const ProjectCard: FC<Pick<HTMLAttributes<HTMLElement>, "className"> & { item: Project }> = ({ className, item }) => {
  return (
    <article className={cn("project-card", className)}>
      <figure className="project-card__figure">
        <img alt={item.title} className="project-card__image" src={item.imgSrc} />
      </figure>
      <div className="project-card__info">
        <h3 children={item.title} className="project-card__title" />
        <p children={item.description} className="project-card__desc" />
        {item.links && (
          <div className="project-card__links">
            {item.links.live && (
              <a className="project-card__link" href={item.links.live} target="_blank">
                <SvgIcon className="project-card__link-icon" name="external" />
                <span className="project-card__link-caption">Посмотреть вживую</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export const Projects: FC = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">Проекты</h2>
      <div className="projects__cards">
        {PROJECTS.map((item, index) => (
          <ProjectCard className="projects__card" item={item} key={index + 1} />
        ))}
      </div>
    </section>
  );
};
