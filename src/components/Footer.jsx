import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2023 - Site desenvolvido por <a href="https://github.com/nicolaskleinaraujo/" target="blank">Nicolas Klein</a></p>
        </footer>
    )
}

export default Footer