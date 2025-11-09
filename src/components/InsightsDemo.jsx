import { useState } from 'react';
import { AlertTriangle, Loader2, Stethoscope, Copy, Check } from 'lucide-react';

const mockAI = async (text) => {
  await new Promise((r) => setTimeout(r, 900));
  const lower = text.toLowerCase();
  const risks = [];
  if (/(bp|blood pressure|hypertension)/.test(lower)) risks.push('Possible uncontrolled hypertension');
  if (/(sugar|glucose|diabetes|hba1c)/.test(lower)) risks.push('Diabetes risk — recommend HbA1c');
  if (/(cough|fever|spo2|oxygen)/.test(lower)) risks.push('Respiratory concern — check SpO₂ and temperature');
  if (risks.length === 0) risks.push('No immediate red flags detected. Continue routine follow-up.');
  return {
    summary: `Summary: ${text.slice(0, 120)}${text.length > 120 ? '…' : ''}`,
    alerts: risks,
  };
};

export default function InsightsDemo() {
  const [note, setNote] = useState('BP 160/100 last month, complaints of dizziness. Random sugar 210 mg/dL today.');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const run = async () => {
    setLoading(true);
    const out = await mockAI(note);
    setResult(out);
    setLoading(false);
  };

  const copy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(`${result.summary}\n- ${result.alerts.join('\n- ')}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section id="insights" className="relative bg-gray-50 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(59,130,246,0.08),transparent_60%)]" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">AI Triage & Summaries</h2>
            <p className="mt-2 text-gray-600">Paste any note, lab snippet, or prescription text. Get instant summaries and risk flags for quick decision support.</p>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={6}
                className="w-full resize-none rounded-md border border-gray-200 p-3 text-sm outline-none focus:border-blue-500"
              />
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={run}
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 disabled:opacity-60"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Stethoscope className="h-4 w-4" />}
                  Analyze
                </button>
                <span className="text-xs text-gray-500">Demo runs locally. No data leaves your browser.</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Output</h3>
                <button
                  onClick={copy}
                  disabled={!result}
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div className="mt-3 space-y-3">
                {result ? (
                  <>
                    <p className="text-sm text-gray-700">{result.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {result.alerts.map((a, i) => (
                        <div key={i} className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-amber-800 text-xs">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          {a}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-gray-500">Results will appear here after analysis.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
