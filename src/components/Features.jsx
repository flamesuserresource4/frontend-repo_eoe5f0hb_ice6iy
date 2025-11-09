import { Shield, Cpu, Database, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'AI Assistance',
    desc: 'Summaries, alerts, and predictive flags for chronic care management.',
  },
  {
    icon: Database,
    title: 'Data Integration',
    desc: 'Ingests lab reports, prescriptions, and digital records into a unified profile.',
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
    <section id="features" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Core Capabilities</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Built for rural healthcare workflows — fast, reliable, and insight-driven.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
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
