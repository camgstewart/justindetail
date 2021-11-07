import styles from "../styles/Hero.module.css";
import { Button } from "@material-ui/core";

export const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <span className={styles.brand}>From Express Detail to Full Inside & Out</span>
                </h1>
                <p className={styles.desc}>
                    DETAILING SERVICES WITH A PERSONAL TOUCH
                </p>
                <Button className={styles.button}>BOOK NOW</Button>
            </div>
            
        </div>
    )
}
