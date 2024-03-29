// CSS
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2023 - Site desenvolvido por <a href="https://github.com/nicolaskleinaraujo/" target="blank">Nicolas Klein</a>.</p>
            <p>Este site foi feito para estudo, por favor utilize com moderação!</p>
            <p>Site desenvolvido utilizando React. A API CRUD feita utilizando Node.js.</p>
            <p>Você pode conferir o <a href="https://github.com/nicolaskleinaraujo/trousseau-project" target="blank">repositório</a> deste site para ver o código fonte!</p>
        </footer>
    )
}

export default Footer
