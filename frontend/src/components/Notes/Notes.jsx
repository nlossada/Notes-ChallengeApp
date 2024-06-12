import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../../redux/actions'
import Note from '../Note/Note'
import styles from './Notes.module.css'

function Notes() {
    const dispatch = useDispatch()

    //Loading gif
    //  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getNotes());
                // setIsLoading(false);
            } catch (error) {
                window.alert(error.message);
                // setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    const allNotesState = useSelector((state) => state.allNotes)





    return (
        <div>
            <h1>My Notes</h1>
            <button>
                <NavLink
                    to="/addNote"
                >ADD NOTE</NavLink>
            </button>
            <div className={styles.NotesContainer}>

                {
                    allNotesState.map((note) =>

                    (<Note
                        key={note.id}
                        note={note} />
                    )
                    )
                }

            </div>
        </div>
    )
}

export default Notes