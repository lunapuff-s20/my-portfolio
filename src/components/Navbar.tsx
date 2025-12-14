import { Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Interests', id: 'interests' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-emerald-500/10 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
        >
          <div className="p-1.5 bg-emerald-500/10 group-hover:bg-emerald-500/20 rounded-lg transition-colors">
            <Cpu className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="font-bold text-white hidden sm:inline">Portfolio</span>
        </button>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-300" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800/50 backdrop-blur-sm border-t border-emerald-500/10">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-slate-700/50 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
