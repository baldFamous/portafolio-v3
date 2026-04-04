import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Automatización de Flujos Regionales",
    category: "Scripts de Python para optimización operativa",
    image: "/project-map.png",
    className: "md:col-span-1"
  },
  {
    id: 2,
    title: "Infraestructura y Contenedores",
    category: "Despliegue seguro y escalable (Docker)",
    image: "/project-infra.png",
    className: "md:col-span-1 pt-12"
  },
  {
    id: 3,
    title: "Plataformas de Gestión Pública",
    category: "Desarrollo Full-Stack (React / Next.js)",
    image: "/project-portal.png",
    className: "md:col-span-1"
  },
  {
    id: 4,
    title: "Desarrollo Web Ágil",
    category: "Creación de APIs y lógica de negocio",
    image: "/project-code.png",
    className: "md:col-span-1"
  }
];

export default function SelectedWorks() {
  return (
    <section id="work" className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Selected Works</h2>
        <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-4">
          Proyectos Destacados
          <span className="h-px w-12 bg-slate-300 block"></span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <div key={project.id} className={`group cursor-pointer ${project.className}`}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{project.title}</h3>
                <p className="text-slate-500 text-sm">{project.category}</p>
              </div>
              <ArrowRight className="text-slate-400 group-hover:text-slate-800 group-hover:-rotate-45 transition-all duration-300 w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
