import Link from 'next/link';
import styles from './contact.module.scss';

const Contact = ()=>{
    return(
        <>
            <div className={styles.contact_wrapper}>
                <div className="container">
                    <p>Contact me if you have any query <Link href="mailto:rahullooksforward@gmail.com">@rahullooksforward@gmail.com</Link></p>
                    <h2>Contact Details</h2>
                    <p>Email: <Link href="mailto:rahullooksforward@gmail.com">@rahullooksforward@gmail.com</Link></p>
                    <p>Phone: <Link href="tel:rahullooksforward@gmail.com">9143116017</Link></p>
                    <p>Linkedin Profile: <Link href="https://www.linkedin.com/in/rahul-yadav-ab236073/" target="_blank">Rahul Yadav</Link></p>
                </div>
            </div>
        </>
    )
}

export default Contact;