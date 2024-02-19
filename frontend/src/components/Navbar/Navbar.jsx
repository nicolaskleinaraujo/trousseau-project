// CSS
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <header className={styles.header}>
            <a href="/"><img src="./coin.svg" alt="Logo Projeto" /></a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/add">Adicionar</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
