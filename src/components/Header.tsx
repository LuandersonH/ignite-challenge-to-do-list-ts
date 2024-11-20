import Logo from "../assets/Logo.png";
import styles from "./Header.module.css"

export function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <img src={Logo} alt="Logo To-Do-List" className={styles.LogoHeader}/>
        </div>
    )
}