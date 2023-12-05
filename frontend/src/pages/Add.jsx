function Add() {
    return (
        <div>
            <h1>Add</h1>
            <form action="http://localhost:3991/api/items" method="post">
                <label htmlFor="name">Nome do Produto: </label>
                <input type="text" name="name" id="name" /><br />
                <label htmlFor="place">Local: </label>
                <input type="text" name="place" id="place" /><br />
                <input type="submit" value="Adicionar" />
            </form>
        </div>
    )
}

export default Add