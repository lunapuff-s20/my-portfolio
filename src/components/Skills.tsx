import { Cpu, Code, Zap, Wifi, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Microcontroller Units',
    icon: Cpu,
    skills: ['Arduino', 'ESP32 (beginner-level)']
  },
  {
    title: 'Programming',
    icon: Code,
    skills: ['C ', 'C++ (basic)', 'Python', 'HTML, CSS, JS', 'Assembly language (8085)']
  },
  {
    title: 'Electronics',
    icon: Zap,
    skills: ['Basic circuit design', 'Sensor interfacing', 'Breadboard prototyping']
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['VS Code', 'Arduino IDE', 'MATLAB', 'LTSpice', 'KiCad (beginner)']
  },
  {
    title: 'Other Skills',
    icon: Wifi,
    skills: ['UI/UX Designing', 'Figma', 'Canva']
  }
  // {
  //   title: 'Protocols',
  //   icon: Wifi,
  //   skills: ['UART', 'I2C (intro-level)']
  // }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-800 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-emerald-500 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-blue-500 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <Cpu className="w-8 h-8 text-emerald-400" />
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
