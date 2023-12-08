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
                            <li>
                                {item.name}
                                <button onClick={() => checkItem()}><FaCheck /></button>
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
                            <li>
                                {item.name}
                                <button onClick={() => checkItem()}><FaCheck /></button>
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
                            <li>
                                {item.name}
                                <button onClick={() => checkItem()}><FaCheck /></button>
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
                            <li>
                                {item.name}
                                <button onClick={() => checkItem()}><FaCheck /></button>
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
