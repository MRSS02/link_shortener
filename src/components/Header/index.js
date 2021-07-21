import "./styles.css"

export default function() {
  const text = (
    <div className="text">
      <h1>More than just shorter links</h1>
      <p className="description">Build your brand’s recognition
      and get detailed insights on how your
      links are performing.</p>
      <button className="greenButton">Get Started</button>
    </div>
  )

  return (
    <div className="Header">
      <div className="mobile">
          <img className="Image"
          src="/assets/illustration-working 1.svg" />
        {text}
      </div>
      <div className="desktop">
        {text}
        <img className="Image"
        src="/assets/illustration-working 1.svg" />
      </div>
    </div>
  )
}
