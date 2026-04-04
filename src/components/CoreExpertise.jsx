import { MonitorSmartphone, Users, Server } from "lucide-react";

const expertise = [
  {
    id: 1,
    title: "Desarrollo Web Full-Stack",
    description: "Construcción de plataformas digitales enfocadas en la usabilidad y la eficiencia operativa.",
    icon: <MonitorSmartphone className="w-5 h-5 text-[#b86060]" />,
    iconBg: "bg-rose-50",
    points: ["React / Next.js", "Integración de APIs", "Diseño de Interfaces"]
  },
  {
    id: 2,
    title: "Coordinación y Gestión de TI",
    description: "Liderazgo regional para asegurar la continuidad del servicio tecnológico y el cumplimiento normativo.",
    icon: <Users className="w-5 h-5 text-[#c77d7d]" />,
    iconBg: "bg-rose-50",
    points: ["Coordinación de equipos", "Normativas del sector público", "Soporte Técnico Regional"]
  },
  {
    id: 3,
    title: "Infraestructura y Automatización",
    description: "Creación de entornos escalables y automatización de tareas para reducir la carga operativa.",
    icon: <Server className="w-5 h-5 text-[#a44b4b]" />,
    iconBg: "bg-rose-50",
    points: ["Docker / Contenerización", "Python Scripting", "Administración de Sistemas"]
  }
];

export default function CoreExpertise() {
  return (
    <section id="expertise" className="py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">Habilidades Clave</p>
        <h2 className="text-4xl font-bold text-slate-800">Core Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {expertise.map((item) => (
          <div key={item.id} className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 flex flex-col h-full border border-slate-100">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${item.iconBg}`}>
              {item.icon}
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
              {item.description}
            </p>
            
            <ul className="space-y-3 mt-auto pt-6 border-t border-slate-100">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-center text-sm font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-200 mr-3" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

