import { CheckCircle2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-emerald-500/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Declaration</h3>
              <p className="text-gray-300">
                I hereby declare that the information provided above is true to the best of my knowledge.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-emerald-500/10">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Soumya · Built with ❤️ and curiosity
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg transition-all hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-emerald-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
