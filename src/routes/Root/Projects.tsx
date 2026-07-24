import type { FC, HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

import { SvgIcon } from "@/components/svg-icon";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
    <Card asChild className={cn("max-w-137.5", className)} data-slot="project-card">
      <article>
        <img
          alt={item.title}
          className="aspect-video object-cover object-center w-full"
          data-slot="project-card-image"
          src={item.imgSrc}
        />
        <CardHeader className="" data-slot="project-card-header">
          <CardTitle
            asChild
            className="text-lg font-bold text-balance md:text-xl lg:text-2xl"
            data-slot="project-card-title"
          >
            <h3 children={item.title} />
          </CardTitle>
          <CardDescription asChild className="text-sm md:text-base lg:text-lg" data-slot="project-card-description">
            <p children={item.description} />
          </CardDescription>
        </CardHeader>
        {item.links && (
          <CardFooter className="" data-slot="project-card-footer">
            {item.links.live && (
              <Button asChild className="w-full" data-slot="project-card-link">
                <a href={item.links.live} target="_blank">
                  <SvgIcon className="" data-slot="project-card-link-icon" name="external" />
                  <span className="" data-slot="project-card-link-caption">Посмотреть вживую</span>
                </a>
              </Button>
            )}
          </CardFooter>
        )}
      </article>
    </Card>
  );
};

export const Projects: FC = () => {
  const { t } = useTranslation();

  return (
    <section data-slot="projects">
      <h2
        children={t("projects.heading", "Проекты")}
        className="mb-4 text-xl font-black text-center md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        data-slot="projects-title"
      />
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(0,550px))] gap-4 justify-center items-start mx-auto"
        data-slot="projects-cards"
      >
        {PROJECTS.map((item, index) => (
          <ProjectCard item={item} key={index + 1} />
        ))}
      </div>
    </section>
  );
};
