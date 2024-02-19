// CSS
import styles from "./Add.module.css"

// DB Fetch
import dbFetch from "../../axios/config"

// Modules
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Add() {
    const navigate = useNavigate()

    // Info storing for item creation
    const [name, setName] = useState("")
    const [place, setPlace] = useState("")

    // This function creates an item via the API
    const handleItem = async(e) => {
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
            <form onSubmit={handleItem}>
                <div>
                    <label>
                        <p>Nome do Item:</p>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required 
                            placeholder="Digite o nome" 
                            value={name}
                            onChange={ (e) => setName(e.target.value) } 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <p>Local:</p>
                        <select required name="place" id="place" onChange={ (e) => setPlace(e.target.value) }>
                            <option className={styles.dis_btn} disabled selected>--ESCOLHA O LOCAL--</option>
                            <option value="Cozinha">Cozinha</option>
                            <option value="Sala de Estar">Sala de Estar</option>
                            <option value="Quarto">Quarto</option>
                            <option value="Eletronicos">Eletronicos</option>
                        </select>
                    </label>
                </div>
                <input type="submit" value="Adicionar" className={styles.submit_button} />
            </form>
        </div>
    )
}

export default Add
