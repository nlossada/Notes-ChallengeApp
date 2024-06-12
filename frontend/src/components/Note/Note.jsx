import React from 'react'
import styles from './Note.module.css'

function Note({ note }) {
    return (
        <div className={styles.Note}>
            {
                note.title && <p className={styles.title}>{note.title.toUpperCase()}</p>
            }
            <div className={styles.text}>{note.text}</div>

            <div className={styles.categoriesContainer}>
                {note.categories && note.categories.map((category, index) => (
                    <p key={index}>{category}</p>
                ))
                }
            </div>
            <div className={styles.buttonContainer}>
                <button>EDIT</button>
                <button>DELETE</button>
                <button>ARCHIVED</button>
            </div>


        </div>
    )
}

export default Note