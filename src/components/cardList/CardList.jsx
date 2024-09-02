import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resent Blog</h2>
      <div className={styles.blogs}>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
