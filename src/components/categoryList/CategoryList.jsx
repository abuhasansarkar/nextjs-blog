import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Popular Categories</div>
      <div className={styles.categories}>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
            <Image className={styles.image}  width={32} height={32} src="/style.png" alt="categoryImg"/>
            Style
        </Link>
        <Link className={`${styles.category} ${styles.coding}`} href="/blog?cat=coding">
            <Image className={styles.image}  width={32} height={32} src="/coding.png" alt="categoryImg"/>
            Coding
        </Link>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
            <Image className={styles.image}  width={32} height={32} src="/style.png" alt="categoryImg"/>
            Style
        </Link>
        <Link className={`${styles.category} ${styles.coding}`} href="/blog?cat=coding">
            <Image className={styles.image}  width={32} height={32} src="/coding.png" alt="categoryImg"/>
            Coding
        </Link>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
            <Image className={styles.image}  width={32} height={32} src="/style.png" alt="categoryImg"/>
            Style
        </Link>
        <Link className={`${styles.category} ${styles.coding}`} href="/blog?cat=coding">
            <Image className={styles.image}  width={32} height={32} src="/coding.png" alt="categoryImg"/>
            Coding
        </Link>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
            <Image className={styles.image}  width={32} height={32} src="/style.png" alt="categoryImg"/>
            Style
        </Link>
        <Link className={`${styles.category} ${styles.coding}`} href="/blog?cat=coding">
            <Image className={styles.image}  width={32} height={32} src="/coding.png" alt="categoryImg"/>
            Coding
        </Link>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
            <Image className={styles.image}  width={32} height={32} src="/style.png" alt="categoryImg"/>
            Style
        </Link>
        <Link className={`${styles.category} ${styles.coding}`} href="/blog?cat=coding">
            <Image className={styles.image}  width={32} height={32} src="/coding.png" alt="categoryImg"/>
            Coding
        </Link>
        </div>
    </div>
  );
};

export default CategoryList;
