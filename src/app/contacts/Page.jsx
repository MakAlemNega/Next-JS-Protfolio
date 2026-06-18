export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl mb-4">
          Let's{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Connect
          </span>
        </h1>
        <p className="text-lg text-slate-400 mb-12 leading-relaxed">
          Have a question, a project system to architect, or want to work
          together? Drop me a message.
        </p>

        <form className="space-y-6 bg-slate-900/20 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-4 font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-sky-500/20"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
