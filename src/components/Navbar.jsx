import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar_list}>
            <img src='https://placehold.jp/150x150.png' alt="Logo Projeto" />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/add">Adicionar</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar