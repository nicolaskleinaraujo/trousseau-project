// Importing CSS
import styles from "./Home.module.css"

// Importing icons
import { FaTrash, FaCheck } from "react-icons/fa"

// Importing the functions
import { useEffect, useState } from "react"
import dbFetch from "../axios/config"

function Home() {
    const [items, setItems] = useState([])

    // This function gets all items from the api and stores into the items variable
    const getItems = async() => {
        try {
            const response = await dbFetch.get("/items")
            setItems(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Executing the above function
    useEffect(() => {
        getItems()
    }, [])

    // This function deletes an item and reloads the page
    async function deleteItem(id) {
        await dbFetch.delete(`/items/${id}`)
        location.reload()
    }

    // This function checks an item and reloads the page
    async function checkItem(id) {
        await dbFetch.put(`/items/${id}`, {
            check: "true"
        })
        location.reload()
    }

    // This function unchecks an item and reloads the page
    async function uncheckItem(id) {
        await dbFetch.put(`/items/${id}`, {
            check: "false"
        })
        location.reload()
    }

    return (
        <div className={styles.home}>
            <h1>Enxoval</h1>
            <div className={styles.grid_areas}>
                <div>
                    <h2>Cozinha</h2>
                    <ul>
                        {
                        items.length == 0
                        ?
                        <li>
                            Carregando... <br />
                            Isso pode demorar um pouco
                        </li>
                        :
                        items.map((item) => (
                            item.place == "Cozinha"
                            ?
                            item.check == "true"
                            ?
                            <li className={styles.checked}>
                                {item.name}
                                <button onClick={() => uncheckItem(item._id)}><FaCheck /></button>
                                <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            <li>
                                {item.name}
                                <button onClick={() => checkItem(item._id)}><FaCheck /></button>
                                <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            null
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Sala de Estar</h2>
                    <ul>
                        {
                        items.length == 0
                        ?
                        <li>
                            Carregando... <br />
                            Isso pode demorar um pouco
                        </li>
                        :
                        items.map((item) => (
                            item.place == "Sala de Estar"
                            ?
                            item.check == "true"
                            ?
                            <li className={styles.checked}>
                                {item.name}
                                <button onClick={() => uncheckItem(item._id)}><FaCheck /></button>
                                <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            <li>
                                {item.name}
                                <button onClick={() => checkItem(item._id)}><FaCheck /></button>
                                <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            null
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Quarto</h2>
                    <ul>
                        {
                        items.length == 0
                        ?
                        <li>
                            Carregando... <br />
                            Isso pode demorar um pouco
                        </li>
                        :
                        items.map((item) => (
                            item.place == "Quarto"
                            ?
                            item.check == "true"
                            ?
                            <li className={styles.checked}>
                                {item.name}
                                <button onClick={() => uncheckItem(item._id)}><FaCheck /></button>
                                <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            <li>
                                {item.name}
                                <button onClick={() => checkItem(item._id)}><FaCheck /></button>
                                <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            null
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Eletronicos</h2>
                    <ul>
                        {
                        items.length == 0
                        ?
                        <li>
                            Carregando... <br />
                            Isso pode demorar um pouco
                        </li>
                        :
                        items.map((item) => (
                            item.place == "Eletronicos"
                            ?
                            item.check == "true"
                            ?
                            <li className={styles.checked}>
                                {item.name}
                                <button onClick={() => uncheckItem(item._id)}><FaCheck /></button>
                                <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            <li>
                                {item.name}
                                <button onClick={() => checkItem(item._id)}><FaCheck /></button>
                                <button onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            null
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
