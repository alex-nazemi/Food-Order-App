import styles from "./HeaderCartButton.module.css"
import { MdTrolley } from "react-icons/md";

const HeaderCartButton = () => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <MdTrolley />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    );
}


export default HeaderCartButton;