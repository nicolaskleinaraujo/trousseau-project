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
        <div>
            <h1>Add</h1>
            <form onSubmit={(e) => createItem(e)}>
                <div>
                    <label htmlFor="name">Nome do Item: </label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="place">Local do Item: </label>
                    <input 
                    type="text" 
                    name="place" 
                    id="place" 
                    required
                    onChange={(e) => setPlace(e.target.value)} 
                    />
                </div>
                <input type="submit" value="Adicionar" />
            </form>
        </div>  
    )
}

export default Add
