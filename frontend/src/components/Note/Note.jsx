import React from 'react'
import styles from './Note.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, editNote } from '../../redux/actions'
import { Link } from 'react-router-dom'
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineArchive } from "react-icons/md";
import { MdOutlineUnarchive } from "react-icons/md";




function Note({ note }) {
    const dispatch = useDispatch()

    const handleDelete = (idNote) => {
        dispatch(deleteNote(idNote))
    }

    //ARCHIVED AND UNARCHIVED NOTE
    const handleArchived = (idNote) => {
        const noteArchived = { archived: true }
        dispatch(editNote(idNote, noteArchived))
    }
    const handleUnarchived = (idNote) => {
        const noteUnarchived = { archived: false }
        dispatch(editNote(idNote, noteUnarchived))
    }



    return (
        <div className={styles.Note}>
            {
                note.title
                    ? <p className={styles.title}>{note.title.toUpperCase()}</p>
                    : <p className={styles.title}></p>
            }
            <div className={styles.text}>{note.text}</div>

            <div className={styles.categoriesContainer}>
                {note.categories && note.categories.map((category, index) => (
                    <p key={index}>{category}</p>
                ))
                }
            </div>
            <div className={styles.buttonContainer}>
                <button>
                    <Link
                        to={`/editNote/${note.id}`}
                    ><MdOutlineModeEdit />


                    </Link>
                </button>
                <button onClick={() => handleDelete(note.id)}><FaRegTrashCan /></button>
                {
                    note.archived
                        ? <button style={{ color: "olive" }} onClick={() => handleUnarchived(note.id)}> <MdOutlineUnarchive />
                        </button>
                        : <button style={{ color: "brown" }} onClick={() => handleArchived(note.id)}> <MdOutlineArchive />
                        </button>
                }

            </div>


        </div>
    )
}

export default Note