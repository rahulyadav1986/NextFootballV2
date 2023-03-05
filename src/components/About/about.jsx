import styles from "./about.module.scss";

const AboutUs = ()=>{
    return(
        <>
            <div className={styles.about_container}>
                <div className="container">
                    <p>This website design and develope by <strong>Rahul Yadav</strong>. Used Technology name is <strong>Next Js.</strong> It's a <strong>React Framework for the Web</strong>.<br />Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
                    <h2>About Me</h2>
                    <h3>Objective </h3>
                    <p>Association with an organization, which provides carrier growth by offering challenging assignments and utilizes my strengths and capabilities effectively. Willing to work in a professional environment with committed and dedicated people.</p>
                    <h3>Profile</h3>
                    <p>1. Young looking for a suitable job, where I can prove myself.<br />2. Highly self-motivated, firm and polite.</p>
                    <h3>Core  Competencies</h3>
                    <p>Seeking a position to utilize my skills and abilities in the industry that offers professional growth while being resourceful,innovative and flexible.</p>
                    <h3>Interests</h3>
                    <p>1. Cricket<br />2. Making Friends.</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;