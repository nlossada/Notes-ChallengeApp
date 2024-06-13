import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/actions'
import { NavLink } from 'react-router-dom'
import styles from './Categories.module.css'
import Category from '../Category/Category'


function Categories() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const allCategoriesState = useSelector((state) => state.allCategories)

    return (
        <div className={styles.Categories}>
            <h1>My Categories</h1>
            <button>
                <NavLink
                    to="/addCategory"
                >ADD CATEGORY
                </NavLink>
            </button>
            <div className={styles.categoryContainer}>

                {
                    allCategoriesState && allCategoriesState.map((category) =>
                    // (<span key={category.id}>{category.name.toUpperCase()}</span>)
                    (<Category
                        key={category.id}
                        category={category}
                    />)
                    )
                }
            </div>
        </div >
    )
}

export default Categories