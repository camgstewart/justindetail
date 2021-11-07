import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { Button } from "@material-ui/core";

const Navbar = () => {
    return (
        <div className={styles.container}>
        <Link href="/">Justin Detail</Link>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <Link href="/Services">About</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/Services">Services</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/Services">Contact</Link>
            </li>
            <li className={styles.listItem}>
                <Button variant="contained">Book Appointment</Button>
            </li>            
        </ul>
            
        </div>
    )
}

export default Navbar
