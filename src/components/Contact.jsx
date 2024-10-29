const Contact = () => {
  return (
    <section className="contact-wrapper">
      <h1>Welcome to Contact page</h1>
      <input className="border border-black" type="text" placeholder="name" />

      <input className="border border-black" type="text" placeholder="lname" />
      <button type="submit" className="border border-black rounded-lg">
        Submit
      </button>
    </section>
  );
};

export default Contact;
