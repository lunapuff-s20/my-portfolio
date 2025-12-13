import { BookOpen } from 'lucide-react';

const courses = [
  'Electronic Devices and Circuits',
  'Digital Electronics',
  'Signals and Systems',
  'Microprocessors and Assembly Language',
  'Data Structures and Algorithms',
  'Network Theory',
  'Numerical Methods'
];

export default function Coursework() {
  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <BookOpen className="w-8 h-8 text-emerald-400" />
          <h2 className="text-4xl font-bold text-white">Relevant Coursework</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 border border-emerald-500/20 rounded-lg p-4 hover:border-emerald-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                <p className="text-gray-300 font-medium">{course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
