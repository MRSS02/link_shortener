import "./styles.css"

export default function() {
  return (
    <div className="Footer">
      <div className="footerBox">
        <h1>Boost your links today</h1>
        <button className="greenButton">Get Started</button>
      </div>
      <div className="socialMedia">
        <h1>Shortly</h1>
        <div className="instance">
          <div className="stronger">Features</div>
          <div className="thinner">Link Shortening</div>
          <div className="thinner">Branded Links</div>
        </div>
        <div className="instance">
          <div className="stronger">Resources</div>
          <div>Blog</div>
          <div>Developers</div>
          <div>Support</div>
        </div>
        <div className="instance">
          <div className="stronger">Company</div>
            <div>About</div>
            <div>Our Team</div>
            <div>Carreers</div>
            <div>Contact</div>
        </div>
        <div className="instance" className="mediaIcons">
          <img className="iconInstance" src="/assets/media-icons/Vector.svg" />
          <img className="iconInstance" src="/assets/media-icons/Vector-1.svg" />
          <img className="iconInstance" src="/assets/media-icons/Vector-2.svg" />
          <img className="iconInstance" src="/assets/media-icons/icon-pinterest 1.svg" />
        </div>

      </div>
    </div>
  )
}
