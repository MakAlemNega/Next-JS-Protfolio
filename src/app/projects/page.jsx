import Link from "next/link";

export default function ProjectsPage() {
  const allProjects = [
    {
      title: "AI-Powered Analytics Platform",
      desc: "Machine learning analytics dashboard.",
      tech: ["Next.js", "FastAPI"],
    },
    {
      title: "E-Commerce Software Ecosystem",
      desc: "Distributed microservices backend system.",
      tech: ["TypeScript", "Docker"],
    },
    {
      title: "Cloud-Native Infrastructure Automation",
      desc: "Automated cloud deployments with zero-downtime.",
      tech: ["AWS", "Terraform"],
    },
  ];

  return (
    // Uniform full-height dark background wrapper
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Matching Background Ambient Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl mb-4">
            All{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            An archive of systems, web architectures, and digital tools I have
            engineered.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((proj, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/60 hover:bg-slate-900/40"
            >
              <div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {proj.title}
                </h2>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
