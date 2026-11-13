type AboutProps = {
  paragraphs: string[]
}

function About({ paragraphs }: AboutProps) {
  return (
    <section className="section" aria-labelledby="about-title">
      <h2 id="about-title">소개</h2>
      {paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </section>
  )
}

export default About
