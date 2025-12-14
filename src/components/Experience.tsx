import { Award, Users } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-8 h-8 text-emerald-400" />
          <h2 className="text-4xl font-bold text-white">Experience & Achievements</h2>
        </div>

        <div className="bg-slate-800 border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-500/60 transition-all hover:shadow-xl hover:shadow-emerald-500/10">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Tantrafiesta 2025 (Technical Fest) – Organizing Committee Member
              </h3>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 flex-shrink-0">▸</span>
                  <span>Assisted in planning and coordinating events during the college technical fest</span>
                </p>
                <p className="text-gray-300 flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 flex-shrink-0">▸</span>
                  <span>Helped manage registrations, event flow, logistics, and participant interaction</span>
                </p>
                <p className="text-gray-300 flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 flex-shrink-0">▸</span>
                  <span>Collaborated with team members to ensure smooth execution of technical activities</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
