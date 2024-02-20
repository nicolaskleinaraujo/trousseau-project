// CSS
import styles from "./Home2.module.css"

// Icons
import { FaTrash, FaCheck } from "react-icons/fa"

// DB Fetch
import dbFetch from "../../axios/config"

// Modules
import { useEffect, useState } from "react"

const Home2 = () => {
    const [loading, setLoading] = useState(true)

    const [items, setItems] = useState([])
    const getItems = async() => {
        try {
            const res = await dbFetch.get("/items")
            setItems(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const checkItem = (id) => {
        items.filter(async(item) => {
            if (item._id === id && item.check === "true") {
                item.check = "false"

                await dbFetch.put(`/items/${id}`, {
                    check: "false"
                })
            } else if (item._id === id && item.check === "false") {
                item.check = "true"

                await dbFetch.put(`/items/${id}`, {
                    check: "true"
                })
            }
            setLoading(true)
        })
    }

    const deleteItem = async(id) => {
        await dbFetch.delete(`/items/${id}`)
        setLoading(true)
    }

    useEffect(() => {
        getItems()
        setLoading(false)
    }, [loading])

    return (
        <div>
            <h1>Enxoval</h1>
            <div className={styles.grid_areas}>
                <div>
                    {items &&
                        items.map((item) => (
                            item.place === "Cozinha" && (
                                <li key={item._id} className={item.check === "true" ? styles.checked : null}>
                                    {item.name}
                                    <button onClick={() => checkItem(item._id)}><FaCheck /></button>
                                    <button onClick={() => deleteItem(item_id)}><FaTrash /></button>
                                </li>
                            )
                        ))
                    }
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home2