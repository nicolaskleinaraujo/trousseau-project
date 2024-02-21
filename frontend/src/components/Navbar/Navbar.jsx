// CSS
import styles from './Navbar.module.css'

// Modules
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className={styles.header}>
            <NavLink to="/"><img src="./project-logo.svg" alt="Logo Projeto" /></NavLink>
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? (styles.active) : "")}>
                    Home
                </NavLink>
                <NavLink to="/add" className={({ isActive }) => (isActive ? (styles.active) : "")}>
                    Adicionar
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? (styles.active) : "")}>
                    Contato
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar
