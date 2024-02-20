// Modules
import axios from "axios"

const dbFetch = axios.create({
    // baseURL: "https://tousseau-project.onrender.com/api"
    baseURL: "http://localhost:3000/api"
}) 

export default dbFetch
