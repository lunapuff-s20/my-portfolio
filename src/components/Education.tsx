import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-emerald-400" />
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>

          <div className="ml-8 md:ml-20">
            <div className="bg-slate-800 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/60 transition-all hover:shadow-lg hover:shadow-emerald-500/10 relative">
              <div className="absolute -left-[2.6rem] md:-left-[3.1rem] top-8 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-900"></div>

              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">2024 – Present</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Technology
              </h3>
              <p className="text-xl text-gray-400 mb-2">
                Electronics and Communication Engineering
              </p>
              <p className="text-gray-500">
                Indian Institute of Information Technology, Nagpur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
