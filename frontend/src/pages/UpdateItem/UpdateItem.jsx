// CSS
import styles from "./UpdateItem.module.css"

// DB Fetch
import dbFetch from "../../axios/config"

// Modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UpdateItem = () => {
    const { id } = useParams()

    const [item, setItem] = useState()
    const getItem = async() => {
        const res = await dbFetch.get(`/items/${id}`)
        setItem(res.data)
    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div>
            <h1>Atualizar Item</h1>
        </div>
    )
}

export default UpdateItem