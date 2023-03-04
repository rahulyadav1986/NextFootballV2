import styles from "./Footer.module.scss";
import React from "react";

const Footer = () =>{
    return(
        <>
            <div className={styles.footer_wrapper}>
                <div className={`${styles.container} container d-flex align-items-center justify-content-center`}>
                    <p>2023 © Pro Soccer </p>
                </div>
            </div>
            
        </>
    )
}

export default Footer;