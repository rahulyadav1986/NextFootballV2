import Image from 'next/image';
import React, { Suspense } from 'react'
import styles from './Hero.module.scss';
const Hero = ()=>{
    return(
        <>
            <div className={styles.hero_container}>
                <div className={styles.slide_item}>
                    <Image src="/images/hero_bg.jpg" className={styles.hero_bg} alt="hero bg" />
                    
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
}

export default Hero;