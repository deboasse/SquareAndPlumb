import { Link } from "react-router-dom";
import { projects } from "../data/projectData";

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="group relative overflow-hidden bg-white cursor-pointer block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#1a1a1a] group-hover:text-[#ED1C24] transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
