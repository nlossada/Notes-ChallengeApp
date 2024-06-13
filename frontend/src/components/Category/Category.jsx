import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './Category.module.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { deleteCategory } from '../../redux/actions';

function Category({ category }) {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteCategory(id))
    }

    return (
        <div className={styles.Category}>
            <div>{category.name.toUpperCase()}</div>
            <button onClick={() => handleDelete(category.id)}><FaRegTrashCan />
            </button>

        </div>
    )
}

export default Category