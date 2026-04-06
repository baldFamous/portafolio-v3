import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative bg-slate-50 pt-32 pb-12 overflow-hidden border-t border-slate-200">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-[#f9ecec]/50 to-transparent blur-3xl rounded-full opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight leading-[1.1] mb-12">
            Resolvamos problemas <br />
            <span className="font-serif italic text-[#b86060] font-normal">complejos</span> juntos.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://wa.me/56956252522" target="_blank" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#b86060] text-white font-medium hover:bg-[#9a5050] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#b86060]/20">
              Contáctame
            </Link>
            <Link href="/R_bastian_cv.pdf" target="_blank" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-slate-800 font-medium hover:bg-slate-50 border border-slate-200 transition-all shadow-sm">
              Ver CV
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-between items-center mt-32 pt-8 border-t border-slate-200 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <div>
            Bastian Rodriguez
          </div>
          <div className="hidden md:block">
            © 2026 Bastian Rodriguez. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/bastian-rodriguez-8b0781211/" target="_blank" className="hover:text-slate-800 transition-colors">LinkedIn</a>
            <a href="https://github.com/baldFamous" target="_blank" className="hover:text-slate-800 transition-colors">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
