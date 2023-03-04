
import { SkelNewPost } from "components/Skeletons/Skeleton";
import Link from "next/link";
import * as moment from 'moment';
import React, { useEffect, useState } from "react";
import styles from "./Topmatch.module.scss";
import VideoMatch from "./VideoMatch";
import Image from "next/image";
const TopMatch = ({Data})=>{
    const [Loading, setLoading] = useState(false);
    const [clickPop, setClickPop] = useState(false);
    const getPop = (i) => {
        setClickPop(i)
    }
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
    })
  
  
    
    
    return(
        
        <>
            <div className={styles.topmatch_wrapper}>
                <div className="container">
                    <h2>Top Matches</h2>
                </div>
                
                <div className={`${styles.container} container`}>
                    <div className={`${styles.match_grid_wrapper} d-flex justify-content-between flex-wrap`}>
                        {
                           Data.map((item, i)=>{
                            return(
                                !Loading ?
                                <SkelNewPost />
                                :
                                <div key={i} className={`${styles.grid_item}`} onClick={() => getPop(i)}>
                                    <div className={styles.image_wrapper}>
                                        <Image src={item.thumbnail} fill={true} alt="thumbnail" />
                                    </div>
                                    <div className={styles.details}>
                                        <div className={`${styles.compitition} d-flex align-items-center`}>  
                                            <Image src="/images/trophy.png" className={styles.trophy} fill={true} alt="trophy" /> 
                                            <h6>{item.competition.name}</h6>
                                            
                                        </div>
                                        <ul className={`${styles.team_match} d-flex align-itms-center justify-content-between`}>                       
                                            <li className="d-flex align-items-center">
                                                <Image src="/images/ball.png" fill={true} alt="ball" /> 
                                                <h3>{item.side1.name}</h3>
                                            </li>
                                            <li className={`${styles.versus} d-flex align-items-center`}>VS</li>
                                            <li className="d-flex align-items-center">
                                                <Image src="/images/ball.png" fill={true} alt="ball" />                     
                                                <h3>{item.side2.name}</h3>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                
                            )
                           }) 
                        }

                        

                        
                       
                        
                    </div>
                </div>
                {
                    
                    Data.map((item,i)=>{
                        return(
                            <>
                                {
                                    clickPop === i ?
                                    <div onClick={() => getPop(!clickPop)} className={styles.pop_over_latest_video}>
                                        <div className={styles.inner_pop}>
                                            <div className={`${styles.compitition} d-flex align-items-center`}>                                                  
                                                <Image src="/images/trophy.png" className={styles.trophy} fill={true} alt="trophy"  /> 
                                                <div>
                                                    <h6>Competititon Name</h6>
                                                    <h2>{item.competition.name}</h2>
                                                </div>                                          
                                                
                                            </div>
                                            <div className={`${styles.main_details} d-flex justify-content-between`}>
                                                <div className={styles.video_wrapper}>
                                                    {
                                                        item.videos.map((vidItem,i)=>{
                                                            return(
                                                                <div className={styles.videos}>
                                                                    <div className={styles.main_video} key={i} dangerouslySetInnerHTML={{__html: vidItem.embed}}></div>
                                                                </div>
                                                            )
                                                        })
                                                    } 
                                                    <ul className={`${styles.team_match} d-flex align-itms-center justify-content-between`}>                       
                                                        <li className="d-flex align-items-center">
                                                            <Image src="/images/ball.png" fill={true} alt="ball" />                             
                                                            <h3>{item.side1.name}</h3>
                                                        </li>
                                                        <li className={`${styles.versus} d-flex align-items-center`}>VS</li>
                                                        <li className="d-flex align-items-center">
                                                            <Image src="/images/ball.png" fill={true} alt="ball" />                         
                                                            <h3>{item.side2.name}</h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                            
                                            
                                            
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

export default TopMatch;