import ContactCard from "../components/ContactCard";
import styles from "@/app/contact/contact.module.css"
import ContactForm from "../components/ContactForm";
const Contact=()=>{
    return <>
    <div className={styles.contsainer}>
        <h1>Contact us</h1>
    <ContactCard />
    <section className={styles.contact_section}>
        <h2>we have to hear <span>from you</span></h2>
        <ContactForm/>
    </section>
    </div>
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212644.89172859892!2d72.92129590323809!3d33.61629290045466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717570595745!5m2!1sen!2s"
     width={100} height={450} style={{border:0}} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>

     </>
}
export default Contact;