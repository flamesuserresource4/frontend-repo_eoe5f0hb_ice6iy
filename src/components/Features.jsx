import { Shield, Cpu, Database, Smartphone, FileSearch, Upload } from 'lucide-react';

const features = [
  {
    icon: FileSearch,
    title: 'Multi-format Ingestion',
    desc: 'Scan prescriptions, parse PDFs, import lab CSVs, and merge EMR data into a clean profile.',
  },
  {
    icon: Cpu,
    title: 'AI Assistance',
    desc: 'Summaries, alerts, and predictive flags for chronic care management.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform + Offline',
    desc: 'Works reliably on mobile and desktop, with low-bandwidth caching.',
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    desc: 'End-to-end encryption, role-based access, and audit trails.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_10%,rgba(59,130,246,0.08),transparent_60%)]" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Core Capabilities</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Built for rural healthcare workflows — fast, reliable, and insight-driven.</p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            <Upload className="h-4 w-4" /> Upload Sample Data
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 text-blue-600 ring-1 ring-inset ring-blue-200/50">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-medium text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
