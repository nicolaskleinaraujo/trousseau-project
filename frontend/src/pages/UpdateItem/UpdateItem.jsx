// CSS
import styles from "./UpdateItem.module.css"

// DB Fetch
import dbFetch from "../../axios/config"

// Modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UpdateItem = () => {
    const { id } = useParams()

    const [name, setName] = useState()
    const [place, setPlace] = useState()

    const getItem = async() => {
        const res = await dbFetch.get(`/items/${id}`)
        setName(res.data.name)
        setPlace(res.data.place)
    }

    const handleItem = () => {
        console.log(name, place)
    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div>
            <h1>Atualizar Item</h1>
            <button onClick={() => console.log(item)}>teste</button>

            <form onSubmit={handleItem}>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required
                    placeholder="Digite o nome do item"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <select required name="place" id="place" defaultValue={place} onChange={ (e) => setPlace(e.target.value) }>
                    <option value="Cozinha">Cozinha</option>
                    <option value="Sala de Estar">Sala de Estar</option>
                    <option value="Quarto">Quarto</option>
                    <option value="Eletronicos">Eletronicos</option>
                </select>
            </form>
        </div>
    )
}

export default UpdateItem