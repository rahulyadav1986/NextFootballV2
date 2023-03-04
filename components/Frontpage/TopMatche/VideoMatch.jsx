import React, { Suspense } from 'react'
const VideoMatch = ({item})=>{
    return(
        <>
            {
                item.videos.map((videodata, i)=>{
                    return(
                        <>
                            <div dangerouslySetInnerHTML={{__html: videodata.embed}}></div>
                            <h6>{videodata.title}</h6>
                        </>
                    )
                })
            }
        </>
    )
}

export default VideoMatch;