function Contact() {
  return (
    <div className="flex justify-around bg-zinc-950 pt-10">
      <div>
        <h4>Get In Touch</h4>
        <ul>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
        </ul>
      </div>
      <form className="flex flex-col gap-5">
        <input type="text" name="Name" placeholder="Name..." />
        <input type="Email" name="Email" placeholder="example@gmail.com" />
        <input type="text" name="Message" placeholder="Type your message..." />
      </form>
    </div>
  );
}

export default Contact;
