import { SignInButton } from "../SignInButton";
import styles from "./style.module.sass";

export const Header = () => {
    return (
        <header className={styles.headerConteiner}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <ul>
                        <a className={styles.active} href="/">Home</a>
                        <a href="/Posts">Post</a>
                    </ul>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}
