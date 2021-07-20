import "./styles.css"
import {useState} from "react"

export default function() {
  const [isActive, setIsActive] = useState(false)
  function reveal() {
    setIsActive(!isActive)
  }
  return (
    <div className="Navbar">
      <h1 className="trademark">Shortly</h1>
      <button className="noButton desktop">Features</button>
      <button className="noButton desktop">Pricing</button>
      <button className="noButton desktop">Resources</button>
      <button className="noButton desktop">Login</button>
      <button className="greenButton desktop">Sign Up</button>
      <button className="noButton dropdown"
      onClick={reveal}>
        <img className="image" src="/assets/hamburger-menu.svg" />
      </button>
        {isActive && (
        <div className="dropdownReveal">
          <button className="noButton">Features</button>
          <button className="noButton">Pricing</button>
          <button className="noButton left">Resources</button>
          <button className="noButton">Login</button>
          <button className="miniGreenButton">Sign Up</button>
        </div>
       )}
    </div>
  )
}
