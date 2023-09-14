import styles from "./Header.module.css";
import headerFoodImage from "../../Images/FoodSpreadHeaderImage.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {

    return (
        <>
            <div className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </div>
            <div className={styles["main-image"]}>
                <img src={headerFoodImage} alt="Delicious food spread"/>
            </div>
        </>
    );
}

export default Header;