import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getNotes } from '../../redux/actions'
import Note from '../Note/Note'
import styles from './Notes.module.css'
import Filters from '../Filters/Filters'

function Notes() {
    const dispatch = useDispatch()

    //Loading gif
    //  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getNotes());
                await dispatch(getCategories());
                // setIsLoading(false);
            } catch (error) {
                console.log(error.message);
                // setIsLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);


    const allNotesState = useSelector((state) => state.allNotes)
    const isFilteredCategory = useSelector(state => state.isFilteredCategory)
    const isFilteredArchived = useSelector(state => state.isFilteredArchived)
    const isOrdered = useSelector(state => state.isOrdered)
    const filteredNotes = useSelector(state => state.filteredNotes)


    let notesToRender = []
    if (isFilteredCategory || isFilteredArchived || isOrdered) {
        notesToRender = filteredNotes
    } else {
        notesToRender = allNotesState
    }




    return (
        <div className={styles.Notes}>
            <h1>My Notes</h1>
            <button>
                <NavLink
                    to="/addNote"
                >ADD NOTE</NavLink>
            </button>

            <Filters />

            <div className={styles.NotesContainer}>
                {
                    notesToRender.map((note) =>

                    (<Note
                        key={note.id}
                        note={note} />
                    ))
                }
            </div>
        </div>
    )
}

export default Notes