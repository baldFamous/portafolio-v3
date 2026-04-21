import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Web For Links",
    category: "Landing Page para página de enlaces",
    image: "/portafolio/webforlinks.png",
    className: "md:col-span-1 pt-12",
    href:"https://weddingpage-indol.vercel.app"
  },
  {
    id: 2,
    title: "Personal Trainer - Heroicos",
    category: "Landing Page para entrenador personal",
    image: "/portafolio/heroicosweb.png",
    className: "md:col-span-1",
    href:"https://heroicos-web.vercel.app/"
  },
  {
    id: 3,
    title: "Vape Ecomerce",
    category: "Ecomerce para venta de productos de vapeo",
    image: "/portafolio/vapeecomerce.png",
    className: "md:col-span-1 pt-12",
    href:"https://vape-store-kappa.vercel.app/"
  },
  {
    id: 4,
    title: "Kine Serena",
    category: "Landing page para un kinesiologo de la Serena",
    image: "/portafolio/kinserena.png",
    className: "md:col-span-1",
    href: "https://kinserena.vercel.app"
  }
];

export default function SelectedWorks() {
  return (
    <section id="work" className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Trabajos Seleccionados</h2>
        <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-4">
          Proyectos Destacados
          <span className="h-px w-12 bg-slate-300 block"></span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {[...projects].reverse().map((project) => (
          <div key={project.id} className={`group cursor-pointer ${project.className}`}>
            <a href={project.href} className="relative block w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </a>
            
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
