function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center pt-10 pb-10">
      <div>
        <h4 className="text-2xl font-bold mb-5 me-15">Get In Touch With Me</h4>
      </div>
      <form className="flex flex-col gap-5 [&_input]:border [&_input]:rounded-sm [&_input]:p-2 [&_input]:w-xl">
        <input type="text" name="Name" placeholder="What is your name?" />
        <input type="Email" name="Email" placeholder="example@gmail.com" />
        <input
          type="text"
          name="Message"
          placeholder="What do you want to say?"
        />
        <button className="border rounded-sm p-1 self-end w-25">Send</button>
      </form>
    </div>
  );
}

export default Contact;
