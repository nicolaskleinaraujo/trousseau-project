// CSS
import styles from "./Home.module.css"

// Icons
import { FaTrash, FaCheck } from "react-icons/fa"

// DB Fetch
import dbFetch from "../../axios/config"

// Modules
import { useEffect, useState } from "react"

function Home() {
    // Getting all the items from the API
    const [items, setItems] = useState([])

    const getItems = async() => {
        try {
            const response = await dbFetch.get("/items")
            setItems(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getItems()
    }, [])

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

    // This function deletes an item and reloads the page
    async function deleteItem(id) {
        await dbFetch.delete(`/items/${id}`)
        location.reload()
    }

    // This functions hides the items buttons and shows on mouse hover
    const [kitchen, setKitchen] = useState("false")
    const [livRoom, setLivRoom] = useState("false")
    const [room, setRoom] = useState("false")
    const [eletronics, setEletronics] = useState("false")
    function showKitchen() {
        setKitchen(!kitchen)
    }
    function showLivRoom() {
        setLivRoom(!livRoom)
    }
    function showRoom() {
        setRoom(!room)
    }
    function showEletronics() {
        setEletronics(!eletronics)
    }

    return (
        <div className={styles.home}>
            <h1>Enxoval</h1>
            <div className={styles.grid_areas}>
                <div>
                    <h2>Cozinha</h2>
                    <ul onMouseEnter={() => showKitchen()} onMouseLeave={() => showKitchen()}>
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
                                <button className={kitchen ? styles.buttons_hiden : null} onClick={() => uncheckItem(item._id)}><FaCheck /></button>
                                <button className={kitchen ? styles.buttons_hiden : null} onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            <li>
                                {item.name}
                                <button className={kitchen ? styles.buttons_hiden : null} onClick={() => checkItem(item._id)}><FaCheck /></button>
                                <button className={kitchen ? styles.buttons_hiden : null} onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            null
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Sala de Estar</h2>
                    <ul onMouseEnter={() => showLivRoom()} onMouseLeave={() => showLivRoom()}>
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
                                <button className={livRoom ? styles.buttons_hiden : null} onClick={() => uncheckItem(item._id)}><FaCheck /></button>
                                <button className={livRoom ? styles.buttons_hiden : null} onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            <li>
                                {item.name}
                                <button className={livRoom ? styles.buttons_hiden : null} onClick={() => checkItem(item._id)}><FaCheck /></button>
                                <button className={livRoom ? styles.buttons_hiden : null} onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            null
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Quarto</h2>
                    <ul onMouseEnter={() => showRoom()} onMouseLeave={() => showRoom()}>
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
                                <button className={room ? styles.buttons_hiden : null} onClick={() => uncheckItem(item._id)}><FaCheck /></button>
                                <button className={room ? styles.buttons_hiden : null} onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            <li>
                                {item.name}
                                <button className={room ? styles.buttons_hiden : null} onClick={() => checkItem(item._id)}><FaCheck /></button>
                                <button className={room ? styles.buttons_hiden : null} onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            null
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Eletronicos</h2>
                    <ul onMouseEnter={() => showEletronics()} onMouseLeave={() => showEletronics()}>
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
                                <button className={eletronics ? styles.buttons_hiden : null} onClick={() => uncheckItem(item._id)}><FaCheck /></button>
                                <button className={eletronics ? styles.buttons_hiden : null} onClick={() => deleteItem(item._id)}><FaTrash /></button>
                            </li>
                            :
                            <li>
                                {item.name}
                                <button className={eletronics ? styles.buttons_hiden : null} onClick={() => checkItem(item._id)}><FaCheck /></button>
                                <button className={eletronics ? styles.buttons_hiden : null} onClick={() => deleteItem(item._id)}><FaTrash /></button>
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
