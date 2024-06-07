import styles from "@/app/contact/contact.module.css";
import Link from "next/link";

import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";
const ContactCard = () => {
    return <>
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <i><MdEmail /></i>
                        <h2>Email</h2>
                        <p>Monday to Friday expected</p>
                        <p className={styles.last_para}>Response time :72 hours</p>
                        <Link href="/">Send Email <span>-&gt;</span></Link>

                    </div>
                    <div className={styles.grid_card}>
                        <i><MdVoiceChat /></i>
                        <h2>Live Chat</h2>
                        <p>Monday to Friday expected</p>
                        <p className={styles.last_para}>Weekends time :9 AM -5 PM ET</p>
                        <Link href="/">Chat Now <span>-&gt;</span></Link>

                    </div>
                    <div className={styles.grid_card}>
                        <i><MdForum /></i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday expected</p>
                        <p className={styles.last_para}>Response time :72 hours</p>
                        <Link href="/" className={styles.anchorlink}>Send Email <span>-&gt;</span></Link>

                    </div>

                </div>
            </div>
        </div>
    </>
}
export default ContactCard;