import styles from "./Home.module.css"

import { useEffect, useState } from "react"
import dbFetch from "../axios/config"

function Home() {
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

    return (
        <div className={styles.home}>
            <h1>Projeto de Enxoval</h1>
            <div className={styles.grid_areas}>
                <div>
                    <h2>Cozinha</h2>
                    <ul>
                        {items.map((item) => (
                            item.place == "Cozinha"
                            ? <li>{item.name}</li>
                            : null
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Sala de Estar</h2>
                    <ul>
                        {items.map((item) => (
                            item.place == "Sala de Estar"
                            ? <li>{item.name}</li>
                            : null
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Quarto</h2>
                    <ul>
                        {items.map((item) => (
                            item.place == "Quarto"
                            ? <li>{item.name}</li>
                            : null
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Eletronicos</h2>
                    <ul>
                        {items.map((item) => (
                            item.place == "Eletronicos"
                            ? <li>{item.name}</li>
                            : null
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
