import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full pt-8 pb-4 flex items-center justify-between z-10 relative">
      <Link href="/" className="font-semibold text-lg text-stone-900 uppercase tracking-wide hover:text-accent transition-colors duration-300">
        Bastian Rodriguez
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
        <Link href="#work" className="hover:text-accent transition-colors duration-300 relative group">
          Trabajos
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#expertise" className="hover:text-accent transition-colors duration-300 relative group">
          Experiencia
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#about" className="hover:text-accent transition-colors duration-300 relative group">
          Sobre mí
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#contact" className="hover:text-accent transition-colors duration-300 relative group">
          Contacto
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      <Link href="https://wa.me/56956252522" target="_blank" className="inline-flex items-center justify-center bg-stone-800 hover:bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95">
        Contactame
      </Link>
    </nav>
  );
}
