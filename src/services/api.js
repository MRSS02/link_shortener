import axios from "axios"

const shortener = axios.create({baseURL: "https://api.shrtco.de/v2"})

export default shortener
