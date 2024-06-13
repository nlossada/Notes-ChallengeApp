import React, { useEffect, useState } from 'react'
import { validateInputFormNote, validateSelectFormNote } from '../../utils/validateFormNote';
import { useDispatch, useSelector } from 'react-redux';
import { editNote, getCategories, getNotes } from '../../redux/actions';
import styles from '../FormAddNote/FormAddNote.module.css'
import { useParams } from 'react-router-dom';

function FormEditNote() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getNotes())
    }, [])

    const allCategoriesState = useSelector((state) => state.allCategories)
    const allNotesState = useSelector((state) => state.allNotes)


    //find note to update
    const { id } = useParams()
    const noteToUpdate = allNotesState.find((note) => note.id === Number(id))
    const notesNoToUpdate = allNotesState.filter((note) => note.id !== Number(id))


    //local state for input
    const [noteData, setNoteData] = useState({
        title: noteToUpdate.title || "",
        text: noteToUpdate.text,
        CategoriesId: [],
    })

    //local state errors
    const [errors, setErrors] = useState({
        title: "",
        text: "*",
        CategoriesId: "Press Ctrl to select two categories",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNoteData((prevData) => {
            const updatedData = { ...prevData, [name]: value };

            setErrors(validateInputFormNote(updatedData));

            // avoid repeted TITLE -> model Note: TITLE unique

            const repetedTitle = notesNoToUpdate.filter(note =>
                (note.title?.trim().toLowerCase()) === (updatedData.title?.trim().toLowerCase())
            );
            if (repetedTitle.length > 0 && updatedData.title.trim() !== '') {
                setErrors({ ...errors, title: "This note title already exists" });
            }


            return updatedData;
        });
    };


    //select CATEGORIES
    const handleSelectChange = (event) => {
        const selectedCategories = Array.from(event.target.options)
            .filter((option) => option.selected)
            .map((selected) => selected.value)
        setNoteData({ ...noteData, CategoriesId: selectedCategories })
        setErrors({ ...errors, CategoriesId: validateSelectFormNote({ ...noteData, CategoriesId: selectedCategories }) })
    }


    //! FALTA AGREGAR SWEET ALERT EXITO -> FRACASO EN ACTIONS
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await dispatch(editNote(id, noteData));
            if (result.success) {
                setNoteData({
                    title: "",
                    text: "",
                    CategoriesId: [],
                });
            }
        } catch (error) {
            console.log("No note updated. ", error);
        }
    }




    return (
        <div className={styles.FormAddNote}>
            <h1>Edit Note</h1>
            <form onSubmit={handleSubmit} className={styles.formNote} >


                {/* <label htmlFor="title"> Title: </label> */}
                <input
                    category="title" id="title" key="title" name="title" value={noteData.title}
                    onChange={handleChange}
                    placeholder='TITLE'
                    className={styles.title}
                />
                <p>{errors.title ? errors.title : null}</p>

                {/* <label htmlFor="Categories"> Categories: </label> */}
                <select name="CategoriesId" id="Categories" multiple onChange={handleSelectChange}>
                    {
                        allCategoriesState && allCategoriesState.map((category) => (
                            <option value={category.id} key={category.id}>{category.name}</option>
                        ))
                    }
                </select>
                <p>{errors.CategoriesId ? errors.CategoriesId : null}</p>

                {/* <label htmlFor="text"> Text: </label> */}
                <input
                    category="text" id="text" key="text" name="text" value={noteData.text}
                    onChange={handleChange}
                    placeholder='Write your note here'
                    className={styles.text}
                />
                <p>{errors.text ? errors.text : null}</p>








                <button
                    category="submit"
                    disabled={Object.values(errors).some(error => error && error.length > 0) || noteData.CategoriesId.length === 0}
                >ADD YOUR NOTE!</button>


            </form>
        </div>
    )
}

export default FormEditNote