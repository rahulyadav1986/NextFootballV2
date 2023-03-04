import Image from "next/image";
import Link from "next/link"
import styles  from './Header.module.scss';
const Header = ()=>{
    return(
        <>
            <header className={styles.header}>
                <div className="container d-flex align-items-center justify-content-center">
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src="/images/logo.png" fill={true} alt="thumbnail" />
                        </Link>
                    </div>
                    {/* <ul className={`${styles.menu_area} d-flex`}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Replay</Link>
                        </li>
                        <li>
                            <Link href="/">Live Stream</Link>
                        </li>
                        <li>
                            <Link href="/">Contact us</Link>
                        </li>
                    </ul> */}
                </div>
                
                
            </header>            
        </>
    )
}

export default Header;