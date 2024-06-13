import React from 'react'
import styles from './Landing.module.css'

function Landing() {
    return (

        <div className={styles.landingContainer}>
            <h1 className={styles.heroText}>
                <b>Capture</b> your thoughts, <br /> organize <b>your ideas</b>, <br /> and boost your productivity <br /> with our  <b>powerful</b>note-taking app.
            </h1>
            <a href="/notes" className={styles.ctaButton}>Get Started</a>
        </div>
    );
};


export default Landing