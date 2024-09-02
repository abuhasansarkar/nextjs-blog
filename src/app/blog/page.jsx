import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';
import styles from "./blog.module.css";

const page = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blogs</h1>
            <div className={styles.content}>
                <CardList/>
                <Menu/>
            </div>
        </div>
    );
};

export default page;