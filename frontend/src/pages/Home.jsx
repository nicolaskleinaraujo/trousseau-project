import styles from "./Home.module.css"

import { useEffect, useState } from "react"
import dbFetch from "../axios/config"

function Home() {
    const [items, setItems] = useState([])

    const getItems = async() => {
        try {
            // const response = await dbFetch.get()
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
                    </ul>
                </div>
                <div>
                    <h2>Sala de Estar</h2>
                    <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                        <li>Opção 4</li>
                    </ul>
                </div>
                <div>
                    <h2>Quarto</h2>
                    <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                        <li>Opção 4</li>
                    </ul>
                </div>
                <div>
                    <h2>Eletronicos</h2>
                    <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                        <li>Opção 4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
