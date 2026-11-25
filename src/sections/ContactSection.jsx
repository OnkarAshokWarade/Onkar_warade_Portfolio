import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Send } from 'lucide-react'
import { contactFormUrl, personalInfo, socialLinks } from '../data/portfolioData'

function CopyButton({ label, value }) {
  const [copied, setCopied] = useState(false)
  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button type="button" className="copy-chip" onClick={copyValue} aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}>
      {copied ? <><Check size={14} aria-hidden="true" />Copied</> : <><Copy size={14} aria-hidden="true" />Copy</>}
      <span className="sr-only" aria-live="polite">{copied ? 'Copied' : ''}</span>
    </button>
  )
}

function ContactSection() {
  const [formStatus, setFormStatus] = useState('idle')

  const submit = async (event) => {
    event.preventDefault()
    if (formStatus === 'submitting') return
    const form = event.currentTarget
    setFormStatus('submitting')
    try {
      const response = await fetch(contactFormUrl, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Unable to send')
      form.reset(); setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section className="block block-contact" id="contact">
      <div className="block-inner contact-split">
        <div className="contact-intro">
          <span className="block-label">Let’s connect</span>
          <h2>Let’s build something <em>great together.</em></h2>
          <p>Have an idea, an opportunity, or a project in mind? Reach out—I’d be happy to connect.</p>

          <dl className="contact-lines">
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a><CopyButton label="Email" value={personalInfo.email} /></dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href={personalInfo.phoneLink}>{personalInfo.phone}</a><CopyButton label="Phone" value={personalInfo.phone} /></dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd><span>{personalInfo.location}</span></dd>
            </div>
          </dl>

          <div className="contact-profiles" aria-label="Social profiles">
            <a href={socialLinks.linkedin.url} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={socialLinks.github.url} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>

        <form className="note-form" onSubmit={submit} aria-labelledby="contact-form-title" aria-describedby="contact-form-note">
          <h3 id="contact-form-title">Tell me about your idea.</h3>
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <label htmlFor="contact-name">Name<input id="contact-name" name="name" autoComplete="name" required placeholder="Your name" /></label>
          <label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
          <label className="note-span" htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" required placeholder="What would you like to discuss?" /></label>
          <label className="note-span" htmlFor="contact-message">Message<textarea id="contact-message" name="message" rows="4" required placeholder="Tell me a little about your idea..." /></label>
          <button className="note-send note-span" type="submit" disabled={formStatus === 'submitting'}>{formStatus === 'submitting' ? 'Sending…' : 'Send message'}<Send size={16} aria-hidden="true" /></button>
          <p className={`note-status note-span ${formStatus}`} id="contact-form-note" role="status" aria-live="polite">{formStatus === 'success' ? 'Message sent successfully. Thank you—I’ll be in touch soon.' : formStatus === 'error' ? 'The message could not be sent. Please email me directly instead.' : 'I’ll get back to you as soon as possible.'}</p>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
