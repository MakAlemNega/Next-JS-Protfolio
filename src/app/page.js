import Link from "next/link";
import Image from "next/image";
import ProfilePic from "../B&W Profile.jpg";

export default function HomePage() {
  // Mock data for easy customization
  const skills = [
    { name: "React / Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Languages" },
    { name: "Tailwind CSS", category: "UI/UX" },
    { name: "Node.js / Express", category: "Backend" },
    { name: "Python / AI / ML", category: "Intelligence" },
    { name: "PostgreSQL / MongoDB", category: "Database" },
  ];

  const featuredProjects = [
    {
      title: "AI-Powered Analytics Platform",
      description:
        "A Next.js dashboard integrating machine learning models to predict user churn rates with 94% accuracy.",
      tags: ["Next.js", "Python", "Tailwind", "FastAPI"],
      link: "/projects",
    },
    {
      title: "E-Commerce Software Ecosystem",
      description:
        "A highly scalable distributed software system built using microservices, featuring real-time inventory tracking.",
      tags: ["TypeScript", "Node.js", "Docker", "PostgreSQL"],
      link: "/projects",
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-sky-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl grid w-full gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4 w-fit rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 border border-sky-500/20">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Makbel Alemayehu
              </span>
            </h1>

            <h2 className="mb-6 text-xl font-semibold text-slate-300 md:text-2xl tracking-wide">
              Web Developer &bull; Software Developer &bull; AI Enthusiast
            </h2>

            <p className="mb-6 max-w-xl text-base md:text-lg text-slate-400 leading-relaxed">
              I build high-performance web applications, robust software
              systems, and intelligent digital solutions designed to solve
              real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/30"
              >
                View My Work
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur px-8 py-4 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500 to-purple-600 opacity-30 blur transition duration-1000 group-hover:opacity-50" />
              <div className="relative h-72 w-72 sm:h-85 sm:w-85 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <Image
                  src={ProfilePic}
                  alt="Makbel Alemayehu Profile Picture"
                  fill
                  priority
                  sizes="(max-w-7xl) 340px, 340px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SKILLS / TECH STACK SECTION */}
      <section className="py-24 border-t border-slate-900 bg-slate-950/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My Core Expertise
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              The tools, languages, and frameworks I use to bring efficient
              software architectures to life.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-900/80"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
                  {skill.category}
                </p>
                <h3 className="text-lg font-medium text-white transition-colors group-hover:text-sky-400">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="py-24 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Featured Engineering Work
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl">
                A selective look at web applications and systems engineered for
                optimal scalability and user utility.
              </p>
            </div>
            <Link
              href="/projects"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300 group"
            >
              See all projects
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-8 rounded-2xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm font-semibold text-sky-400 hover:underline"
                  >
                    Explore Case Study &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BRIEF ABOUT / JOURNEY TIMELINE */}
      <section className="py-24 border-t border-slate-900 bg-slate-950/50">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                My Engineering Approach
              </h2>
              <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                I believe clean, maintainable code is non-negotiable. Whether
                architecting database schemas, optimizing frontend render
                speeds, or tinkering with open-source AI APIs, I focus on
                delivering user-centric performance.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8 border-l-2 border-slate-800 pl-6 ml-2 sm:ml-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 bg-sky-500 h-3 w-3 rounded-full ring-4 ring-slate-950" />
                <span className="text-xs font-semibold text-sky-400">
                  2024 - Present
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Full-Stack Exploration
                </h3>
                <h3>
                  Focusing heavily on Next.js server architectures, robust cloud
                  deployments, and implementing client-side machine learning
                  integrations.2022 - 2024Core Software SystemsDeep dived into
                  algorithmic problem solving, RESTful system designs, security
                  architectures, and relational database normalization.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
