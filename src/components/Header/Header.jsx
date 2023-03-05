import Image from "next/image";
import Link from "next/link"
import styles  from './Header.module.scss';
import { useRouter } from "next/router";
const Header = ()=>{
    const router = useRouter();
    return(
        <>
            <header className={styles.header}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src="/images/logo.png" fill={true} alt="thumbnail" />
                        </Link>
                    </div>
                    <ul className={`${styles.menu_area} d-flex`}>
                        <li>
                            <Link href="/" className={router.pathname == "/" ? `${styles.active}` : ""}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about-us" className={router.pathname == "/about" ? `${styles.active}` : ""}>About</Link>
                        </li>
                        <li>
                            <Link href="/games" className={router.pathname == "/games" ? `${styles.active}` : ""}>Games</Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className={router.pathname == "/contact-us" ? `${styles.active}` : ""}>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </header>            
        </>
    )
    
    
}

export default Header;