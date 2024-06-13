import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className={styles.NavBar}>
            <button >
                <NavLink
                    to="/notes"
                    style={({ isActive }) => isActive ? { color: "gray" } : null}
                >Notes</NavLink>
            </button>
            <button >
                <NavLink
                    to="/categories"
                    style={({ isActive }) => isActive ? { color: "gray" } : null}
                >Categories</NavLink>
            </button>
        </div>
    )
}

export default NavBar