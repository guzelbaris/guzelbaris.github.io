import { contact } from "../data/contact";

export function Contact() {
  return (
    <section
      id="contact"
      className="content-section contact-section"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">04 / Contact</p>

      <div className="contact-layout">
        <div className="contact-information">
          <h2 id="contact-title">
            Good things start
            <br />
            <span>with a conversation.</span>
          </h2>

          <p className="contact-intro">
            Have an idea, a technical challenge, or something interesting
            to share? I’d love to hear about it.
          </p>

          <div className="contact-list">
            <a
              className="contact-item"
              href={`mailto:${contact.email}`}
            >
              <span className="contact-item-icon" aria-hidden="true">
                @
              </span>

              <span className="contact-item-text">
                <span className="contact-item-label">Email</span>
                <strong>{contact.email}</strong>
              </span>

              <span className="contact-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <a className="contact-item" href={contact.phoneHref}>
              <span className="contact-item-icon" aria-hidden="true">
                +
              </span>

              <span className="contact-item-text">
                <span className="contact-item-label">Phone</span>
                <strong>{contact.phone}</strong>
              </span>

              <span className="contact-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <div className="contact-item">
              <span className="contact-item-icon" aria-hidden="true">
                ◎
              </span>

              <span className="contact-item-text">
                <span className="contact-item-label">Based in</span>
                <strong>{contact.location}</strong>
              </span>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link whatsapp-link"
            >
              Message on WhatsApp ↗
            </a>

            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label={`Instagram: ${contact.instagramHandle}`}
            >
              Instagram ↗
            </a>
          </div>

          <a
            className="cv-download"
            href={contact.cvUrl}
            download="Baris-Guzel-CV.pdf"
          >
            <span className="cv-icon" aria-hidden="true">
              ↓
            </span>

            <span>
              <strong>Download my CV</strong>
              <span className="cv-description">
                Experience, skills, and background · PDF
              </span>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <div className="contact-form-panel">
          <p className="eyebrow">Say hello</p>
          <h3>What do you have in mind?</h3>
          <p className="contact-form-intro">
            Tell me a little about yourself and your idea.
          </p>

          <form
            className="contact-form"
            action="https://formsubmit.co/805f78309c1c81a1f868ef2cfda80a4e"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from Baris Guzel's portfolio"
            />

            <input type="hidden" name="_template" value="table" />

            <input
              className="contact-honeypot"
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="contact-form-row">
              <div className="form-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Alex Morgan"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="alex@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-topic">What’s it about?</label>
              <select id="contact-topic" name="topic" defaultValue="" required>
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="Project idea">Project idea</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Technical conversation">
                  Technical conversation
                </option>
                <option value="Just saying hello">Just saying hello</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="I have an idea I’d like to share..."
                rows={6}
                minLength={10}
                maxLength={5000}
                required
              />
            </div>

            <p className="contact-form-note">
              Your name, email, and message will be processed by
              FormSubmit and emailed to me so I can respond.
            </p>

            <button
              className="button button-primary contact-submit"
              type="submit"
            >
              Send message
              <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}