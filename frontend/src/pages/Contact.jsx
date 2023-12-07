import styles from "./Contact.module.css"
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

function Contact() {
 return(
    <div className={styles.contact}>
        <h1>Contato</h1>
        <ul>
            <li><a href="https://github.com/nicolaskleinaraujo/" target="blank"><FaGithub /> GitHub</a></li>
            <li><a href="https://wa.me/5544997666224" target="blank"><FaWhatsapp /> Whatsapp</a></li>
            <li><a href="https://www.instagram.com/nicolas__klein/" target="blank"><FaInstagram /> Instagram</a></li>
            <li><MdOutlineEmail /> contatonkfa@gmail.com</li>
        </ul>
    </div>
 )
}

export default Contact
