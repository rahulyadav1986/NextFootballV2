import Image from "next/image";
import Link from "next/link"
import styles  from './Header.module.scss';
import { useRouter } from "next/router";
import { useState } from "react";
const Header = ()=>{
    const router = useRouter();
    const [menu, setmenu] = useState(false);
    const menuToggle = () =>{
        setmenu(!menu)
    }
    return(
        <>
            <header className={styles.header}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src="/images/logo.png" fill={true} alt="thumbnail" />
                        </Link>
                    </div>
                    <div className={menu ? `ovarlay open` : `ovarlay` } onClick={menuToggle}></div>
                    <div onClick={menuToggle} className={`${styles.hamburger}  d-flex align-items-center justify-content-center`}><i class="fa-solid fa-bars"></i></div>
                    <ul className={`${styles.menu_area} ${menu ? `${styles.menu_area} ${styles.open_menu} d-flex`: `${styles.menu_area} d-flex`}`}>
                        <li>
                            <Link  onClick={menuToggle} href="/" className={router.pathname == "/" ? `${styles.active}` : ""}>Home</Link>
                        </li>
                        <li>
                            <Link  onClick={menuToggle} href="/about-us" className={router.pathname == "/about-us" ? `${styles.active}` : ""}>About</Link>
                        </li>
                        <li>
                            <Link  onClick={menuToggle} href="/games" className={router.pathname == "/games" ? `${styles.active}` : ""}>Games</Link>
                        </li>
                        <li>
                            <Link  onClick={menuToggle} href="/contact-us" className={router.pathname == "/contact-us" ? `${styles.active}` : ""}>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </header>            
        </>
    )
    
    
}

export default Header;