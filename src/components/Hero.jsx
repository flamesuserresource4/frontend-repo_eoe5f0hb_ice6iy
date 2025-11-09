import Spline from '@splinetool/react-spline';
import { Sparkles, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0F1C] text-white">
      {/* Background aesthetics */}
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_20%,rgba(35,76,255,0.20),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_90%_80%,rgba(0,208,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,28,0)_0%,rgba(10,15,28,0.6)_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 sm:px-8 md:grid-cols-2 md:py-24">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs sm:text-sm text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-300" />
            AI-powered, field-first healthcare platform
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Aarogya-Setu
            <span className="block text-blue-300">Web Interoperability for Rural Care</span>
          </h1>
          <p className="max-w-xl text-white/80 text-sm sm:text-base md:text-lg">
            Unify prescriptions, lab results, and digital records into a single, secure view. Get automated summaries, alerts, and predictive insights — even in low-bandwidth settings.
          </p>
          <div className="mt-2 flex flex-col sm:flex-row items-start gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600 transition">
              Get Started
            </a>
            <a href="#insights" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">
              See AI Insights
            </a>
          </div>
          <div className="mt-4 inline-flex items-center gap-3 text-white/70">
            <Activity className="h-5 w-5 text-green-300" />
            <span className="text-sm">Optimized for offline/low-data use in the field</span>
          </div>
        </div>

        {/* Right: 3D Object */}
        <div className="relative">
          <div className="relative h-[360px] rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10 backdrop-blur md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* glow */}
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.25),rgba(20,184,166,0.25),rgba(59,130,246,0.25))] blur-xl opacity-40" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
