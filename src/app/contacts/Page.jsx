export default function ContactsPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4">Let's Connect</h1>
      <p className="text-slate-400 mb-8">
        Have a question or want to work together? Drop me a message.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-white focus:outline-none focus:border-sky-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-white focus:outline-none focus:border-sky-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-white focus:outline-none focus:border-sky-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-sky-500 py-3 font-semibold text-white transition hover:bg-sky-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
