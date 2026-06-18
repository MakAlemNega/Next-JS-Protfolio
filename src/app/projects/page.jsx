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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4">All Projects</h1>
      <p className="text-slate-400 mb-12">
        An archive of systems and tools I have engineered.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((proj, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-slate-900 bg-slate-900/20"
          >
            <h2 className="text-xl font-bold text-white mb-2">{proj.title}</h2>
            <p className="text-sm text-slate-400 mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs rounded bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
