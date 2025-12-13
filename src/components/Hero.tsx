import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #10b981 1px, transparent 1px),
            linear-gradient(0deg, #10b981 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-emerald-500/50 animate-float">
            <span className="text-slate-900">EC</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Soumya Prakash</span>
        </h1>

        <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-light">
          2nd year Electronics & Communication Engineer student
        </p>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Aspiring to Building a future with embedded systems, robotics, and innovative hardware-software solutions
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-300">
          <a href="#" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <MapPin className="w-4 h-4" />
            <span>Mumbai</span>
          </a>
          {/* <a href="tel:" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <Phone className="w-4 h-4" />
            <span>Phone Number</span>
          </a> */}
          <a href="mailto:" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <Mail className="w-4 h-4" />
            <span>soumyaprakash2046@gmail.com</span>
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-slate-800 hover:bg-emerald-600 rounded-lg transition-all hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-slate-800 hover:bg-emerald-600 rounded-lg transition-all hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50">
            <Github className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
