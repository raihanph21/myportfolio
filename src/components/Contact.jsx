import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mkooggny");

  return (
    <div id="contact" className="flex flex-col items-center pt-10 pb-10">
      <h4 className="text-2xl font-bold mb-5">Get In Touch With Me</h4>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 [&_input]:border [&_input]:rounded-sm [&_input]:p-2 w-full p-5 lg:w-xl"
      >
        <label htmlFor="name">What is your name?</label>
        <input id="name" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email">What is your email?</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          className="border rounded-sm p-2 h-32 resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="border rounded-sm self-end p-1 hover:cursor-pointer"
        >
          Send
        </button>
      </form>

      {/* POPUP */}
      {state.succeeded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Popup */}
          <div className="relative bg-zinc-800 text-white rounded-lg p-6 w-96 text-center shadow-xl">
            <h2 className="text-xl font-bold mb-3">Thank You! 🎉</h2>
            <p className="mb-5">Your message has been successfully sent.</p>
            <button
              className="px-4 py-2 bg-black text-white font-bold rounded-md hover:cursor-pointer"
              onClick={() => window.location.reload()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
