import styles from './Skeletons.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkelNewPost = () => {
    return (
        <>
            <div className={styles.grid_item}>
                <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
                    <Skeleton count={1} className={styles.skelbox} />
                </SkeletonTheme>
                <div className={`${styles.compitition} d-flex align-items-center`}>
                    <SkeletonTheme baseColor="#bdb8b8" highlightColor="#fff">
                        <Skeleton count={1} className={styles.skeltag} /> 
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#bdb8b8" highlightColor="#fff">                               
                        <Skeleton count={1} className={styles.skelheading} />
                    </SkeletonTheme>
                </div>
                <ul className={`${styles.team_match} d-flex align-itms-center justify-content-between`}>                       
                    <li  className='d-flex align-items-center justify-content-center'>
                        <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
                            <Skeleton count={1} className={styles.skelline} />
                        </SkeletonTheme>
                    </li>
                    <li className='d-flex align-items-center justify-content-center'>
                        <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
                            <Skeleton count={1} className={styles.skelvs} />
                        </SkeletonTheme>
                    </li>
                    <li  className='d-flex align-items-center justify-content-center'>
                        <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
                            <Skeleton count={1} className={styles.skelline} />
                        </SkeletonTheme>
                    </li>
                </ul>
            </div>
            
        </>
    )
}

export { SkelNewPost };