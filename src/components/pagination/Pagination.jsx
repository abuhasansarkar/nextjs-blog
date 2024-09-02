import styles from "./pagination.module.css";
const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.prev}>previous Page</button>
            <button className={styles.next}>Next Page</button>
        </div>
    );
};

export default Pagination;