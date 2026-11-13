type ContactProps = {
  github: string
  email: string
}

function Contact({ github, email }: ContactProps) {
  return (
    <section className="section" aria-labelledby="contact-title">
      <h2 id="contact-title">연락처</h2>
      <ul className="contact">
        <li>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
