import { Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-8 h-8 text-emerald-400" />
          <h2 className="text-4xl font-bold text-white">Objective</h2>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/40 transition-all">
          <p className="text-gray-300 text-lg leading-relaxed">
            Enthusiastic Electronics and Communication Engineering student with hands-on experience in
            <span className="text-emerald-400 font-semibold"> embedded systems</span>,
            <span className="text-emerald-400 font-semibold"> microcontrollers</span>, and
            <span className="text-emerald-400 font-semibold"> robotics</span>.
            Passionate about building efficient hardware–software systems and eager to contribute to innovative
            future technologies for <span className="text-blue-400 font-semibold">space</span> and
            <span className="text-blue-400 font-semibold"> embedded domains</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
