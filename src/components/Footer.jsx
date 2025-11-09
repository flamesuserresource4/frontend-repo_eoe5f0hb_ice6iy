import { ShieldCheck, WifiOff, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold">Aarogya-Setu</h4>
            <p className="mt-2 text-sm text-white/70">AI-powered web interoperability for rural healthcare — unifying records with privacy and resilience.</p>
          </div>
          <div>
            <h5 className="font-medium">Trust</h5>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-300" /> Encryption-in-transit</li>
              <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-300" /> Role-based access</li>
              <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-300" /> Audit trail</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium">Field Ready</h5>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li className="inline-flex items-center gap-2"><WifiOff className="h-4 w-4 text-blue-300" /> Offline-first caching</li>
              <li className="inline-flex items-center gap-2"><WifiOff className="h-4 w-4 text-blue-300" /> Low-data mode</li>
              <li className="inline-flex items-center gap-2"><WifiOff className="h-4 w-4 text-blue-300" /> Auto-sync when online</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Aarogya-Setu. All rights reserved.</p>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Github className="h-4 w-4" />
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
