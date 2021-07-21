import shortener from "../../services/api"
import axios from "axios"
import { useState } from "react"
import "./styles.css"

export default function Shortener() {

  const [link, setLink] = useState("")
  const [isError, setIsError] =useState(false)
  const [loading, setLoading] = useState(false)
  const url="https://api.shrtco.de/v2/shorten?url="
  function setValue(event) {
    setLink(event.target.value)
  }

  async function updateRequest(event) {
    event.preventDefault()
    setIsError(false)
    setLoading(true)
    try {
    const result = await shortener.get("/shorten", {params: {url: link}})
    console.log(result.data)
    setLink(result.data.result.short_link)
    } catch(e) {
     setIsError(true)
    } finally {
     setLoading(false)
    }
  }

  return (
    <form className="Shortener" onSubmit={updateRequest}>
      <div className="container">
        <input className={isError ? "input error" : "input" }
        type="text" placeholder="Shorten a link here..."
        value={link} onChange={setValue}/>
        <button className="greenButton" type="submit">Shorten it!</button>
        <div className="message">
        {loading && <p className="loading">Loading...</p>}
        {console.log(isError)}
        {isError && <p className="error">Please type a link</p>}
        </div>
      </div>
    </form>
  )
}
