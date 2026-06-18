import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Left Branding Column */}
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Makbel Alemayehu<span className="text-sky-500">.</span>
            </Link>
            <p className="text-sm max-w-xs text-slate-500">
              Building high-performance software systems and intelligent web applications.
            </p>
          </div>

          {/* Right Navigation & Socials Links Columns */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Sitemap</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/" className="text-sm hover:text-white">Home</Link></li>
                <li><Link href="/projects" className="text-sm hover:text-white">Projects</Link></li>
                <li><Link href="/contacts" className="text-sm hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm hover:text-white">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {currentYear} Makbel Alemayehu. All rights reserved.</p>
          <p>Designed and engineered with Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
