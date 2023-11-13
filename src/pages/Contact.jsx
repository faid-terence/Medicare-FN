export const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>

        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="form__input mt-1"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              SUbject
            </label>
            <input
              type="text"
              name=""
              id="subject"
              className="form__input mt-1"
              placeholder="Let us know how we can help you"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              type="text"
              rows="6"
              name=""
              id="message"
              className="form__input mt-1"
              placeholder="Leave a Comment ............"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            SEND!
          </button>
        </form>
      </div>
    </section>
  );
};
