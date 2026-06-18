import Link from "next/link";

export default function HireMePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl mb-4">
          Let's Build{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Something Great
          </span>
        </h1>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I am currently accepting contract roles, software consulting, and
          full-time engineering positions.
        </p>

        <div className="grid gap-6 md:grid-cols-2 text-left mb-12">
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-sky-400 mb-2">
              Full-Stack Development
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Architecting production-ready frontends and scaleable, normalized
              backend server endpoints.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-purple-400 mb-2">
              AI Integrations
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connecting modern web applications to language models, APIs, and
              intelligent data pipelines.
            </p>
          </div>
        </div>

        <Link
          href="/contacts"
          className="inline-block rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/30"
        >
          Start a Project Conversation
        </Link>
      </section>
    </div>
  );
}
