// CSS
import styles from "./UpdateItem.module.css"

// DB Fetch
import dbFetch from "../../axios/config"

// Modules
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const UpdateItem = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [place, setPlace] = useState("")

    const getItem = async() => {
        const res = await dbFetch.get(`/items/${id}`)
        setName(res.data.name)
        setPlace(res.data.place)
    }

    const handleItem = async(e) => {
        e.preventDefault()

        try {
            await dbFetch.put(`/items/${id}`, {
                name,
                place
            })

            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div>
            <h1>Atualizar Item</h1>

            <form onSubmit={handleItem}>
                <label>
                    <p>Nome do Item:</p>

                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required
                        placeholder="Digite o nome do item"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>

                <label>
                    <p>Local:</p>

                    <select required name="place" id="place" defaultValue={place} onChange={ (e) => setPlace(e.target.value) }>
                        <option value={place} selected hidden>{place}</option>
                        <option value="Cozinha">Cozinha</option>
                        <option value="Sala de Estar">Sala de Estar</option>
                        <option value="Quarto">Quarto</option>
                        <option value="Eletronicos">Eletronicos</option>
                    </select>
                </label>

                <input type="submit" value="Atualizar" /> 
            </form>
        </div>
    )
}

export default UpdateItem