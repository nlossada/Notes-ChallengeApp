import React from 'react'
import styles from './NotFound.module.css'

function NotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.text}>OH! This page has vanished into the void. <br></br> Let's get you back on track.</h1>
            <a href="/notes" className={styles.ctaButton}>Go back!</a>
        </div>
    )
}

export default NotFound