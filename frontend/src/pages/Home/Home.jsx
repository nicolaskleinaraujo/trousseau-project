// CSS
import styles from "./Home.module.css"

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
                setLoading(true)
            } else if (item._id === id && item.check === "false") {
                item.check = "true"
                await dbFetch.put(`/items/${id}`, {
                    check: "true"
                })
                setLoading(true)
            }

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
        <div className={styles.home}>
            <h1>Enxoval</h1>
            {loading ? (
                <img src="./loading-gif.svg" alt="GIF de Loading" className={styles.loading} />
            ) : (
                <div className={styles.grid_areas}>
                    <div>
                        <h2>Cozinha</h2>
                        {items &&
                            items.map((item) => (
                                item.place === "Cozinha" && (
                                    <li key={item._id} className={item.check === "true" ? styles.checked : null}>
                                        {item.name}
                                        <button onClick={() => checkItem(item._id)}><FaCheck /></button>
                                        <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                                    </li>
                                )
                            ))
                        }
                    </div>
                    <div>
                        <h2>Sala de Estar</h2>
                        {items &&
                            items.map((item) => (
                                item.place === "Sala de Estar" && (
                                    <li key={item._id} className={item.check === "true" ? styles.checked : null}>
                                        {item.name}
                                        <button onClick={() => checkItem(item._id)}><FaCheck /></button>
                                        <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                                    </li>
                                )
                            ))
                        }
                    </div>
                    <div>
                        <h2>Quarto</h2>
                        {items &&
                            items.map((item) => (
                                item.place === "Quarto" && (
                                    <li key={item._id} className={item.check === "true" ? styles.checked : null}>
                                        {item.name}
                                        <button onClick={() => checkItem(item._id)}><FaCheck /></button>
                                        <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                                    </li>
                                )
                            ))
                        }
                    </div>
                    <div>
                        <h2>Eletrônicos</h2>
                        {items &&
                            items.map((item) => (
                                item.place === "Eletronicos" && (
                                    <li key={item._id} className={item.check === "true" ? styles.checked : null}>
                                        {item.name}
                                        <button onClick={() => checkItem(item._id)}><FaCheck /></button>
                                        <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                                    </li>
                                )
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home2