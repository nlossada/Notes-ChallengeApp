import { Link } from "react-router-dom";
import styles from './BackBtn.module.css'

export function BackBtn ({ path }) {
  return (
    <button type="button" className={styles.backBtn}>
      <Link to={path}>
          &lt; Back
      </Link>
    </button>
  )
}