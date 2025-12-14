import { Heart, Cpu, Satellite, Wifi, PenTool, Brain } from 'lucide-react';

const interests = [
  { name: 'Robotics', icon: Cpu },
  { name: 'Space Technology', icon: Satellite },
  { name: 'Embedded Systems', icon: Cpu },
  { name: '3D Printing', icon: PenTool },
  { name: 'IoT Devices', icon: Wifi },
  { name: 'PCB Design', icon: PenTool },
  { name: 'AI on Edge Hardware', icon: Brain }
];

export default function Interests() {
  return (
    <section id="interests" className="py-20 px-4 bg-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Heart className="w-8 h-8 text-emerald-400" />
          <h2 className="text-4xl font-bold text-white">Interests</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((interest, idx) => {
            const Icon = interest.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/50 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-gray-200 font-semibold text-lg">{interest.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
