// Modules
import axios from "axios"

const dbFetch = axios.create({
    baseURL: "https://tousseau-project.onrender.com/api"
}) 

export default dbFetch
