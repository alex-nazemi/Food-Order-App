import styles from "./HeaderCartButton.module.css"
import { MdTrolley } from "react-icons/md";

const HeaderCartButton = () => {
    return (
        <>  
            <div className={styles.button}>
                <MdTrolley className={styles.icon} />
                <button onClick={() => console.log("Clicked!")}>Your Cart</button>
                <div className={styles.badge}>0</div>
            </div>
        </>
    );
}


export default HeaderCartButton;