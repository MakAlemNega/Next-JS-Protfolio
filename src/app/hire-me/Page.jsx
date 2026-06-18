import Link from "next/link";

export default function HireMePage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-white mb-4">
        Let's Build Something Great
      </h1>
      <p className="text-slate-400 mb-12">
        I'm currently accepting freelance projects, contract roles, and
        full-time engineering positions.
      </p>

      <div className="grid gap-6 md:grid-cols-2 text-left mb-12">
        <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/40">
          <h2 className="text-lg font-bold text-sky-400 mb-2">
            Full-Stack Development
          </h2>
          <p className="text-sm text-slate-400">
            Architecting production-ready frontends and scaleable server
            endpoints.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/40">
          <h2 className="text-lg font-bold text-purple-400 mb-2">
            AI Integrations
          </h2>
          <p className="text-sm text-slate-400">
            Connecting LLMs, automated agents, and intelligent data logic to
            modern web products.
          </p>
        </div>
      </div>

      <Link
        href="/contacts"
        className="inline-block rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]"
      >
        Start a Project Conversation
      </Link>
    </section>
  );
}
