// CSS
import styles from "./Home2.module.css"

// Icons
import { FaTrash, FaCheck } from "react-icons/fa"

// DB Fetch
import dbFetch from "../../axios/config"

// Modules
import { useEffect, useState } from "react"

const Home2 = () => {
    const [items, setItems] = useState([])
    const getItems = async() => {
        try {
            const response = await dbFetch.get("/items")
            setItems(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const checkItem = async(id) => {
        var itemCheck = items.filter((item) => item._id === id)
        if (itemCheck.check == "true") {
            console.log("true")
            /*itemCheck.check = "false"

            await dbFetch.put(`/items/${id}`, {
                check: "false"
            }) */
        } else if (itemCheck.check == "false") {
            console.log("false")
            /*itemCheck.check = "true"

            await dbFetch.put(`/items/${id}`, {
                check: "true"
            })*/
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    console.log(items)

    return (
        <div>
            <h1>Enxoval</h1>
            <div className={styles.grid_areas}>
                <div>
                    {items &&
                        items.map((item) => (
                            item.check === "true" ? (
                                <div id={item._id} >
                                    <li className={styles.checked}>{item.name} --- {item.place}</li>
                                    <button onClick={() => checkItem(item._id)}>teste</button>
                                </div>
                            ) : (
                                <div id={item._id} >
                                    <li>{item.name} --- {item.place}</li>
                                    <button onClick={() => checkItem(item._id)}>teste</button>
                                </div>
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