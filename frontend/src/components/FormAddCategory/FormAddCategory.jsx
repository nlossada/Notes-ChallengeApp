import React, { useEffect, useState } from 'react'
import { validateInputFormCategory } from '../../utils/validateFormCategory'
import { useDispatch, useSelector } from 'react-redux'
import styles from './FormAddCategory.module.css'
import { createCategory, getCategories } from '../../redux/actions'

function FormAddCategory() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const allCategoriesState = useSelector((state) => state.allCategories)


    //local state for input
    const [categoryData, setCategoryData] = useState({
        name: "",
    })

    //local state errors
    const [errors, setErrors] = useState({
        name: "*",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCategoryData((prevData) => {
            const updatedData = { ...prevData, [name]: value };

            setErrors(validateInputFormCategory(updatedData));

            // avoid repeted name-> model category: name unique  
            const repetedName = allCategoriesState.find(category =>
                (category.name?.toLowerCase()) === (updatedData.name?.toLowerCase())
            );
            if (repetedName !== undefined && updatedData.name.trim() !== '') {
                setErrors({ ...errors, name: "This category already exists" });
            }


            return updatedData;
        });
    };


    //! FALTA AGREGAR SWEET ALERT EXITO -> FRACASO EN ACTIONS
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await dispatch(createCategory(categoryData));
            if (result.success) {
                setCategoryData({
                    name: "",
                });
            }
        } catch (error) {
            console.log("Unexpected error: ", error);
        }
    }
    return (
        <div className={styles.FormAddCategory}>

            <h1>Add Category</h1>
            <form onSubmit={handleSubmit} className={styles.formcategory} >


                {/* <label htmlFor="name"> name: </label> */}
                <input
                    category="name" id="name" key="name" name="name" value={categoryData.name}
                    onChange={handleChange}
                    placeholder='Enter a category'
                    className={styles.category}
                />
                <p>{errors.name ? errors.name : null}</p>

                <button
                    category="submit"
                    disabled={Object.values(errors).some(error => error && error.length > 0)}
                >ADD CATEGORY!</button>
            </form>
        </div>
    )
}

export default FormAddCategory