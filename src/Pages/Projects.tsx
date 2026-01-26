"use client";
import Projectone from "../assets/projectone.png";
import Projecttwo from "../assets/projecttwo.png";
import Projectthree from "../assets/projectthree.png";
import { PinContainer } from "../components/ui/3d-pin";

type Project = {
  id: number;
  title: string;
  description: string;
  img: string | { src: string };
  link: string;
};

export const projects: Project[] = [
  { id: 2, title: "Portfolio Website", description: "A modern personal portfolio built with React and Tailwind.", img: Projectone, link: "#" },
  { id: 3, title: "Portfolio Website", description: "A modern personal portfolio built with React and Tailwind.", img: Projecttwo, link: "#" },
  { id: 4, title: "Portfolio Website", description: "A modern personal portfolio built with React and Tailwind.", img: Projectthree, link: "#" },
];

const Projects = () => {
  return (
    <section
      id="creations"
      className="section bg-[#030406] px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 lg:py-16"
    >
      <div className="section-header max-w-5xl mx-auto text-center mb-6 sm:mb-10">
        <h2 className="About-h2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          CREAT<span>IONS</span>
        </h2>
        <p className="About-p text-gray-300 text-sm sm:text-base md:text-lg mt-3">
          This is a selection of some of our recent work.
        </p>
      </div>

      <div className="project-wrapper max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <PinContainer key={project.id} title={project.title} href={project.link}>
            <article
              aria-labelledby={`project-${project.id}-title`}
              className="project-card tracking-tight text-slate-100/90 flex flex-col justify-between h-full bg-transparent p-3 sm:p-4 rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-[1.02] focus-within:scale-[1.02] focus:outline-none"
            >
              <div className="flex-1 w-full rounded-md overflow-hidden bg-gradient-to-br relative z-10">
                <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64">
                  <img
                    src={typeof project.img === "string" ? project.img : project.img.src}
                    alt={project.title}
                    loading="lazy"
                    className="relative z-20 w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-3 flex flex-col">
                <h3 id={`project-${project.id}-title`} className="font-bold text-sm sm:text-base md:text-lg text-slate-100 truncate">
                  {project.title}
                </h3>
                <div className="description text-xs sm:text-sm md:text-base font-normal text-slate-400 mt-2">
                  {project.description}
                </div>

                <div className="mt-3">
                  <a
                    href={project.link}
                    className="inline-block text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                    aria-label={`Open ${project.title}`}
                  >
                    View project →
                  </a>
                </div>
              </div>
            </article>
          </PinContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
