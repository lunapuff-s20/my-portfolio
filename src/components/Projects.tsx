import { Folder, TrendingUp, Radio, Wrench } from 'lucide-react';

const projects = [
  {
    title: 'Line Follower Robot (PID-Based, Competitive, Team of 2)',
    icon: TrendingUp,
    color: 'emerald',
    points: [
      'Designed and built a competitive line-following robot using QTR 8 sensor array and N20 motors',
      'Implemented a PID control algorithm to achieve smooth turns, stable high-speed motion, and accurate path tracking',
      'Tuned PID parameters to handle sharp curves, intersections, and minor track disturbances effectively',
      'Enabled reliable traversal over small obstacles and uneven surfaces while maintaining line alignment',
      'Gained hands-on experience in control logic design, sensor calibration, motor driver interfacing, and real-world debugging'
    ]
  },
  {
    title: 'Basic Sensor Interfacing (Arduino/ESP32)',
    icon: Radio,
    color: 'blue',
    points: [
      'Interfaced sensors like temperature and IR modules',
      'Wrote simple code to read sensor data and display it through the serial monitor'
    ]
  },
  {
    title: 'Small DIY Robotics Experiments',
    icon: Wrench,
    color: 'orange',
    points: [
      'Tried simple tasks like motor control, obstacle detection, and basic robot movement',
      'Learned debugging and hardware troubleshooting through trial and error'
    ]
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Folder className="w-8 h-8 text-emerald-400" />
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const colorClasses = {
              emerald: 'border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-emerald-500/10',
              blue: 'border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/10',
              orange: 'border-orange-500/30 hover:border-orange-500/60 hover:shadow-orange-500/10'
            };
            const iconColors = {
              emerald: 'bg-emerald-500/10 text-emerald-400',
              blue: 'bg-blue-500/10 text-blue-400',
              orange: 'bg-orange-500/10 text-orange-400'
            };

            return (
              <div
                key={idx}
                className={`bg-slate-800 border ${colorClasses[project.color as keyof typeof colorClasses]} rounded-xl p-6 transition-all hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${iconColors[project.color as keyof typeof iconColors]} rounded-lg flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>

                <ul className="space-y-3 ml-16">
                  {project.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-emerald-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
