import Spline from '@splinetool/react-spline';
import { Sparkles, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0A0F1C] text-white">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_50%,rgba(10,15,28,0.0),rgba(10,15,28,0.85))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 sm:px-8 md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs sm:text-sm text-white/80 backdrop-blur">
          <Sparkles className="h-4 w-4 text-blue-300" />
          AI-powered, field-first healthcare platform
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          Aarogya-Setu
          <span className="block text-blue-300">Web Interoperability for Rural Care</span>
        </h1>
        <p className="max-w-2xl text-white/80 text-sm sm:text-base md:text-lg">
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
        <div className="mt-6 inline-flex items-center gap-3 text-white/70">
          <Activity className="h-5 w-5 text-green-300" />
          <span className="text-sm">Optimized for offline/low-data use in the field</span>
        </div>
      </div>
    </section>
  );
}
