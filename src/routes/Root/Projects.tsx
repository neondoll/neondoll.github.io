import { FC, HTMLAttributes, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { SvgIcon } from "@/components/svg-icon";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Project = { imgSrc: string; title: string; desc: string; tech: string; links?: { live?: string } };

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
          <CardDescription
            asChild
            className="text-sm text-justify md:text-base lg:text-lg"
            data-slot="project-card-description"
          >
            <p children={item.desc} />
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

  const projects = useMemo(() => {
    return [
      {
        imgSrc: "https://xn--80aejmawrcgd.xn--p1ai/images/vLNeyfu9vI 1.png",
        title: t("projects.awards.title", "ПРЕМИИ ПРАВИТЕЛЬСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ"),
        desc: t("projects.awards.desc", "Веб-приложение для приёма заявок на премии Правительства РФ и последующего отображения премированных работ.\nРеализована сложная клиентская часть с маршрутизацией и глобальным состоянием, серверная часть на Yii2, админ-панель для обработки заявок. Приложение активно используется в рамках государственных конкурсов."),
        links: { live: "https://xn--80aejmawrcgd.xn--p1ai" },
      },
    ] as Project[];
  }, [t]);

  return (
    <section className="py-4 md:py-8" data-slot="projects" id="projects">
      <h2
        children={t("projects.heading", "Проекты")}
        className="mb-4 text-xl font-black text-center md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        data-slot="projects-title"
      />
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(0,550px))] gap-4 justify-center items-start mx-auto"
        data-slot="projects-cards"
      >
        {projects.map((item, index) => (
          <ProjectCard item={item} key={index + 1} />
        ))}
      </div>
    </section>
  );
};
