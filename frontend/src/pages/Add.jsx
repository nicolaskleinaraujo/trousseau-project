import styles from "./Add.module.css"

import dbFetch from "../axios/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Add() {
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [place, setPlace] = useState()

    const createItem = async (e) => {
        e.preventDefault()

        await dbFetch.post("/items", {
            name,
            place
        })

        navigate("/")
    }

    return (
        <div className={styles.add}>
            <h1>Adicionar Item</h1>
            <form onSubmit={(e) => createItem(e)}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    placeholder="Digite o nome"
                    onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="place">Local: </label>
                    <input 
                    type="text" 
                    name="place" 
                    id="place" 
                    required
                    placeholder="Digite o local"
                    onChange={(e) => setPlace(e.target.value)} 
                    />
                </div>
                <input type="submit" value="Adicionar" className={styles.submit_button} />
            </form>
        </div>
    )
}

export default Add
