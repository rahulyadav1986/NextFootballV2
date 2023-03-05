import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Suspense } from 'react'
import styles from './Hero.module.scss';
const Hero = ()=>{
    const location = useRouter();
    const actualLocation = location.pathname;
    if(actualLocation == '/'){
        return(
            <>
                <div className={styles.hero_container}>
                    <div className={styles.slide_item}>
                        <Image src="/images/hero_bg.jpg" fill={true} className={styles.hero_bg} alt="hero bg" />
                        <div className={styles.content_wrapper}>
                            <div className={`${styles.container} container d-flex align-items-center justify-content-between`}>
                                <div className={`${styles.content_area} d-flex flex-column justify-content-center`}>
                                    <div className={styles.tag_line}>welcome to</div>
                                    <h3>pro soccer<br /><span>football club</span></h3>                               
                                </div>
                                <Image src="/images/hero_avator2.png" fill={true} className={styles.hero_avator} alt="thumbnail"  />
                            </div>
                        </div>
                    </div>
                    <a href="#latest" className={`${styles.down_arrow} d-flex align-items-center justify-content-center`}><i class="fa-solid fa-chevron-down"></i></a>
                </div>
            </>
        )
    } else if(actualLocation == '/about-us'){
        return(
            <>
                <div className={`${styles.hero_container} ${styles.inner}`}>
                    <div className={styles.slide_item}>
                        <Image src="/images/hero_bg.jpg" fill={true} className={styles.hero_bg} alt="hero bg" />
                        <div className={styles.content_wrapper}>
                            <div className={`${styles.container} container d-flex align-items-center `}>
                                <div className={`${styles.content_area} d-flex flex-column justify-content-center`}>
                                    <h1>about <span>us</span></h1>                               
                                </div>
                                <Image src="/images/hero_avator2.png" fill={true} className={styles.hero_avator} alt="thumbnail"  />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if(actualLocation == '/games'){
        return(
            <>
                <div className={`${styles.hero_container} ${styles.inner}`}>
                    <div className={styles.slide_item}>
                        <Image src="/images/hero_bg.jpg" fill={true} className={styles.hero_bg} alt="hero bg" />
                        <div className={styles.content_wrapper}>
                            <div className={`${styles.container} container d-flex align-items-center`}>
                                <div className={`${styles.content_area} d-flex flex-column justify-content-center`}>
                                    <h1>all <span>Games</span></h1>                               
                                </div>
                                <Image src="/images/hero_avator2.png" fill={true} className={styles.hero_avator} alt="thumbnail"  />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if(actualLocation == '/contact-us'){
        return(
            <>
                <div className={`${styles.hero_container} ${styles.inner}`}>
                    <div className={styles.slide_item}>
                        <Image src="/images/hero_bg.jpg" fill={true} className={styles.hero_bg} alt="hero bg" />
                        <div className={styles.content_wrapper}>
                            <div className={`${styles.container} container d-flex align-items-center `}>
                                <div className={`${styles.content_area} d-flex flex-column justify-content-center`}>
                                    <h1>contact <span>us</span></h1>                               
                                </div>
                                <Image src="/images/hero_avator2.png" fill={true} className={styles.hero_avator} alt="thumbnail"  />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
    
}

export default Hero;