import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
      <div className="flex-1 space-y-6 max-w-2xl">
        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold tracking-wider rounded-full uppercase mb-4">
          Innovación & Servicio Público
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800 leading-[1.1]">
          Digitalización <span className="font-serif text-[#b86060] italic font-normal">Eficiente</span> y Servicio Público.
        </h1>
        
        <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
          Coordinador Regional de TI enfocado en la modernización tecnológica y la optimización de procesos. Un puente entre la infraestructura técnica, el desarrollo de software y las necesidades reales del ciudadano.
        </p>
      </div>

      <div className="flex-1 w-full flex justify-center md:justify-end">
        <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Placeholder state */}
          <Image 
            src="/hero-portrait-new.png" 
            alt="Bastian Rodriguez portrait" 
            fill
            className="object-cover z-10"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>
    </section>
  );
}
