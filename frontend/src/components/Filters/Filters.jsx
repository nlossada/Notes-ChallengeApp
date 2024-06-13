import styles from "./Filters.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { clearFiltered, filterByArchived, filterByCategory, orderById, setArchivedValue, setCategoryValue } from "../../redux/actions"


const Filters = () => {

    const dispatch = useDispatch()

    const allCategoriesState = useSelector(state => state.allCategories)
    const isFilteredCategory = useSelector(state => state.isFilteredCategory)
    const isFilteredArchived = useSelector(state => state.isFilteredArchived)
    const isOrdered = useSelector(state => state.isOrdered)
    const filteredNotes = useSelector(state => state.filteredNotes)

    const archivedValue = useSelector(state => state.archivedValue)
    const categoryValue = useSelector(state => state.categoryValue)

    //FILTERS
    //filters selects and handlers
    const handleFilterArchived = (event) => {
        console.log(event.target.value)
        dispatch(setArchivedValue(event.target.value))
    }

    const handleFilterCategory = (event) => {
        dispatch(setCategoryValue(event.target.value))
    }
    //filters buttons
    const handleApplyFilters = () => {
        dispatch(filterByArchived(archivedValue))
        dispatch(filterByCategory(categoryValue))
        setIdOrderCriteria("default")

    }

    const handleClearFilters = () => {
        setIdOrderCriteria("default")
        dispatch(clearFiltered())
    }



    //!SORTING
    const [idOrderCriteria, setIdOrderCriteria] = useState("default")


    const handleIdOrder = (event) => {
        setIdOrderCriteria(event.target.value)
        dispatch(orderById(event.target.value))
    }






    return (

        <div className={styles.containerFilter}>

            <div>
                <label htmlFor="filterArchived">Filter by Archived:</label>
                <select
                    name="filterArchived"
                    id="filterArchived"
                    onChange={handleFilterArchived}
                    value={archivedValue}
                    //disable if no value selected or dismount and mount and is filtered already
                    disabled={archivedValue !== "default" || isFilteredArchived}
                >
                    <option value="default" disabled hidden>Select an option</option>
                    <option value="all">All Notes</option>
                    <option value="active">ACTIVE</option>
                    <option value="archived">ARCHIVED</option>
                </select>
            </div>

            <div>
                <label htmlFor="filterCategory">Filter by Category:</label>
                <select
                    name="filterCategory"
                    id="filterCategory"
                    onChange={handleFilterCategory}
                    value={categoryValue}
                    disabled={categoryValue !== "default" || isFilteredCategory}
                >
                    <option value="default" disabled hidden>Select an option</option>
                    <option value="all">All Categorys</option>
                    {
                        allCategoriesState && allCategoriesState.map((category) => (
                            <option value={category.name} key={category.id}>{category.name}</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <button
                    onClick={handleApplyFilters}
                    disabled={categoryValue === "default" || archivedValue === "default" || isFilteredArchived || isFilteredCategory}
                >Apply</button>
                <button onClick={handleClearFilters}>Clear</button>
            </div>





            <div className={styles.containerFilter}>
                <div>
                    <label htmlFor="orderById">Order:</label>
                    <select
                        name="orderById"
                        id="orderById"
                        onChange={handleIdOrder}
                        value={idOrderCriteria}
                        disabled={isFilteredArchived && isFilteredCategory && filteredNotes.length === 0}

                    >
                        <option value="default" disabled hidden>Select an option</option>
                        <option value="newest">NEWEST FIRST</option>
                        <option value="oldest">OLDEST FIRST</option>
                    </select>
                </div>
            </div>
            <br />
            <div className={styles.filterTag}>
                {//conditional render of text filters applied
                    isFilteredArchived || isFilteredCategory || isOrdered
                        ? <p>Filters or Order are applied, clear them to continue</p>
                        : null
                }

                {
                    isFilteredArchived && isFilteredCategory && filteredNotes.length === 0
                        ? <p>UPS! THERE ARE NO NOTES WITH THE FILTERING CRITERIA</p>
                        : null
                }
            </div>


        </div>
    )
}


export default Filters