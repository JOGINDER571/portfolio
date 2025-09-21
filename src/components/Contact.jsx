import { useId, useState } from "react";

export default function Contact() {
  const nameId = useId();
  const emailId = useId();
  const msgId = useId();
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: integrate with your email service or backend
    setStatus("Thanks! I'll get back to you soon.");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="px-4 md:px-8 lg:px-10 py-12 bg-gray-50 dark:bg-gray-900/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4" aria-describedby={status ? "contact-status" : undefined}>
          <div>
            <label htmlFor={nameId} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input id={nameId} name="name" type="text" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor={emailId} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input id={emailId} name="email" type="email" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor={msgId} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea id={msgId} name="message" rows="5" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 font-semibold shadow-sm transition-colors">Send</button>
            {status && (
              <p id="contact-status" role="status" className="text-sm text-green-700 dark:text-green-400">{status}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}


