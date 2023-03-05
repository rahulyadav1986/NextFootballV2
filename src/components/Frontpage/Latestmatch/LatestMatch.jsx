import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from 'react'
import { useState } from "react";
import styles from "./Latestmatch.module.scss";
const LatestMatch = ({Data})=>{
    // const [clicklatest, setClickLatest]= useState();
    // const onclickLatest = ()=> setClickLatest(!clicklatest);

    const [clickPop, setClickPop] = useState(false);
    const getPop = (i) => {
        setClickPop(i)
    }
    return(
        <>

            <div id="latest" className={styles.latest_new_wrapper}>
                <Image fill={true} className={styles.particles2} src="/images/background03.jpg" alt="thumbnail"  />
                <div className={`${styles.container} container d-flex `}>
                   <div className={styles.left_details}>
                        <Image src="/images/bg-6.webp" fill={true} alt="thumbnail"  />
                   </div> 
                   <div className={styles.right_details}>   
                   <div className="heading_wrap d-flex align-items-center">
                        <Image src="/images/ball_vector.png" fill={true} />
                        <h2>Latest <span>Matches</span></h2>
                    </div> 
                    <div className={`${styles.match_details} d-flex flex-wrap`}>
                        {
                        Data.slice(0,3).map((item,i)=>{
                            return(
                                    
                                    <div key={i} className={`${styles.list} d-flex`}>
                                        <div className={styles.thumbnail} onClick={() => getPop(i)}>
                                            <Image src={item.thumbnail} fill={true} alt="thumbnail"  />
                                            <i class="fa-solid fa-circle-play"></i>
                                        </div>
                                        <div className={`${styles.details}`}>
                                            <div className={`${styles.compitition} d-flex align-items-center`}>
                                                <Image src="/images/trophy.png" fill={true} className={styles.trophy} alt="thumbnail"  />
                                                <h6>{item.competition.name}</h6>
                                            </div>
                                            <ul className={`${styles.team_match} d-flex align-itms-center flex-column justify-content-between`}>                       
                                                <li className="d-flex align-items-center">
                                                    <Image src="/images/ball.png" fill={true} alt="thumbnail"  />                 
                                                    <div className={`${styles.side} d-flex align-items-center`}>
                                                        <h3>{item.side1.name}</h3>
                                                        <Link target="_blank" href={item.side1.url}>Explore <i class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </li>
                                                <li className={styles.versus}>VS</li>
                                                <li className="d-flex align-items-center">
                                                    <Image src="/images/ball.png" fill={true} alt="thumbnail"  />                           
                                                    <div className={`${styles.side} d-flex align-items-center`}>
                                                        <h3>{item.side2.name}</h3>
                                                        <Link target="_blank" href={item.side2.url}>Explore <i class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                   
                      
                   </div> 
                </div>               
                {
                    
                    Data.slice(0,3).map((item,i)=>{
                        return(
                            <>
                                {
                                    clickPop === i ?
                                    <div onClick={() => getPop(!clickPop)} className={styles.pop_over_latest_video}>
                                        <div className={styles.inner_pop}>
                                            <div key={i} dangerouslySetInnerHTML={{__html: item.embed}}></div>
                                        </div>
                    
                                    </div>
                                    :
                                    ""
                                }
                            </>
                            
                        )
                    }) 
                }    
                    
            </div>
        </>
    )

}

export default LatestMatch;