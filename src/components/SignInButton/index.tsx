import styles from "./style.module.sass";
import { FaGithub } from "react-icons/fa"
import {FiX} from "react-icons/fi"

export const SignInButton = () => {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#04b301"/>
            Gabriel Dos Santos
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#eba417"/>
            Sig in with Github
        </button>
    )
}
