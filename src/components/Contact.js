import React from 'react';

const Contact = () => {
    return (
      <section>
        <h2>Let's Talk</h2>
        <div>
          <form 
           action="https://formspree.io/mvorwnwo"
           method="POST">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourEmail@email.com"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                rows="8"
                placeholder="Please leave us a message here."
                required
              />
            </div>
            <div>
              <input
                type="submit"
                value="submit here"
              />
            </div>
          </form>
        </div>
      </section>
    )
  }
  export default Contact;