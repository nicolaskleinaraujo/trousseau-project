import styles from './Navbar.module.css'

function Navbar() {
    return (
        <header className={styles.header}>
            <img src='https://placehold.jp/150x150.png' alt="Logo Projeto" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/add">Adicionar</a></li>
                    <li><a href="/remove">Remover</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
