function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
