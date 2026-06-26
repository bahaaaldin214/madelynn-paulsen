import type { ContactViewModel } from "@lumora/core";
import { useViewModel } from "@lumora/ui";
import { Reveal } from "../components/Reveal.js";
import { social } from "../content.js";

interface ContactPageProps {
  viewModel: ContactViewModel;
}

/**
 * Site-local Contact View — bespoke styling, but the behaviour (validation,
 * submit) lives entirely in the shared @lumora/core ContactViewModel (MVVM).
 */
export function ContactPage({ viewModel }: ContactPageProps) {
  const state = useViewModel(viewModel);

  return (
    <div className="page page--inner contact">
      <header className="section__head">
        <Reveal as="p" className="label">
          05 — Contact
        </Reveal>
        <Reveal as="h1" className="display contact__title">
          Let&apos;s make <em>something</em> together.
        </Reveal>
        <Reveal as="p" className="lead">
          Available for freelance cinematography, photography and collaboration.
        </Reveal>
        <Reveal className="contact__actions">
          <a className="btn" href={social.instagram} target="_blank" rel="noopener">
            Instagram ↗
          </a>
          <a className="btn btn--ghost" href={social.youtube} target="_blank" rel="noopener">
            YouTube ↗
          </a>
          <a className="btn btn--ghost" href={social.substack} target="_blank" rel="noopener">
            Substack ↗
          </a>
        </Reveal>
      </header>

      {state.submitted ? (
        <Reveal className="contact__done">
          <p>Thank you — your message is on its way. I&apos;ll be in touch soon.</p>
        </Reveal>
      ) : (
        <Reveal className="contact__formwrap">
          <form
            className="contact__form"
            onSubmit={(e) => {
              e.preventDefault();
              void viewModel.submit();
            }}
          >
            <div className="field">
              <input
                id="cname"
                value={state.name}
                onChange={(e) => viewModel.setName(e.target.value)}
                disabled={state.submitting}
                placeholder=" "
                required
              />
              <label htmlFor="cname">Your name</label>
            </div>
            <div className="field">
              <input
                id="cemail"
                type="email"
                value={state.email}
                onChange={(e) => viewModel.setEmail(e.target.value)}
                disabled={state.submitting}
                placeholder=" "
                required
              />
              <label htmlFor="cemail">Email</label>
            </div>
            <div className="field field--full">
              <textarea
                id="cmsg"
                rows={4}
                value={state.body}
                onChange={(e) => viewModel.setBody(e.target.value)}
                disabled={state.submitting}
                placeholder=" "
                required
              />
              <label htmlFor="cmsg">Tell me about your project</label>
            </div>

            {state.errors.length > 0 ? (
              <ul className="contact__errors" data-lumora-errors>
                {state.errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            ) : null}

            <button type="submit" className="btn btn--solid" disabled={state.submitting}>
              {state.submitting ? "Sending…" : "Send message →"}
            </button>
          </form>
        </Reveal>
      )}
    </div>
  );
}
