// Importing the CSS
import styles from "./Add.module.css"

// Importing the functions
import dbFetch from "../axios/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Add() {
    const navigate = useNavigate()

    // Info storing for item creation
    const [name, setName] = useState()
    const [place, setPlace] = useState()

    // This function creates an item via the API
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
                    <select required name="place" id="place" onChange={ (e) => setPlace(e.target.value) }>
                        <option disabled selected>Escolha o local</option>
                        <option value="Cozinha">Cozinha</option>
                        <option value="Sala de Estar">Sala de Estar</option>
                        <option value="Quarto">Quarto</option>
                        <option value="Eletronicos">Eletronicos</option>
                    </select>
                </div>
                <input type="submit" value="Adicionar" className={styles.submit_button} />
            </form>
        </div>
    )
}

export default Add
