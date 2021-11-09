import styles from "../styles/Hero.module.css";
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";

export const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
            <span className={styles.brand}>From Express Detail to Full Inside & Out</span>
                <h1 className={styles.title}>
                    <p className={styles.desc}>
                    DETAILING SERVICES WITH A PERSONAL TOUCH
                </p>
                </h1>
                <Stack direction="row" spacing={2}>                   
                <Button variant="contained">BOOK APPOINTMENT</Button>
                <Button variant="outlined">SEE OUR WORK</Button> 
                </Stack>                     
            </div>
            
        </div>
    )
}
