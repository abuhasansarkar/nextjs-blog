import Image from "next/image";
import Link from "next/link";
import styles from "./menu.module.css";
const Menu = () => {
  return (
    <div className={styles.container}>
      <div>
        <h4>{"What's hot"}</h4>
        <h2 className={styles.title}>Most Popular</h2>
        <div className={styles.items}>
          <Link href="/" className={styles.item}>
            <div className={styles.textContainer}>
              <Link className={styles.btn} href="/">
                Travel
              </Link>
              <h3 className={styles.categoryTitle}>
                Lorem, ipsum dolor sit amet consectetur.
              </h3>
              <span className={styles.nameDate}>
                <b>John Doe</b> 01.22.2024
              </span>
            </div>
          </Link>
          <Link href="/" className={styles.item}>
            <div className={styles.textContainer}>
              <Link className={styles.btn} href="/">
                Travel
              </Link>
              <h3 className={styles.categoryTitle}>
                Lorem, ipsum dolor sit amet consectetur.
              </h3>
              <span className={styles.nameDate}>
                <b>John Doe</b> 01.22.2024
              </span>
            </div>
          </Link>
          <Link href="/" className={styles.item}>
            <div className={styles.textContainer}>
              <Link className={styles.btn} href="/">
                Travel
              </Link>
              <h3 className={styles.categoryTitle}>
                Lorem, ipsum dolor sit amet consectetur.
              </h3>
              <span className={styles.nameDate}>
                <b>John Doe</b> 01.22.2024
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/*  */}

      <div>
        <h4 className={styles.smallTitle}>Chosen by the Editor</h4>
        <h2 className={styles.title}>Editor Pick</h2>
        <div className={styles.items}>
          <Link href="/" className={styles.item}>
            <div className="imgContainer">
              <Image
                className={styles.image}
                src="/p1.jpeg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className={styles.textContainer}>
              <Link className={styles.btn} href="/">
                Travel
              </Link>
              <h3 className={styles.categoryTitle}>
                Lorem, ipsum dolor sit amet consectetur.
              </h3>
              <span className={styles.nameDate}>
                <b>John Doe</b> 01.22.2024
              </span>
            </div>
          </Link>
          <Link href="/" className={styles.item}>
            <div className="imgContainer">
              <Image
                className={styles.image}
                src="/p1.jpeg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className={styles.textContainer}>
              <Link className={styles.btn} href="/">
                Travel
              </Link>
              <h3 className={styles.categoryTitle}>
                Lorem, ipsum dolor sit amet consectetur.
              </h3>
              <span className={styles.nameDate}>
                <b>John Doe</b> 01.22.2024
              </span>
            </div>
          </Link>
          <Link href="/" className={styles.item}>
            <div className="imgContainer">
              <Image
                className={styles.image}
                src="/p1.jpeg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className={styles.textContainer}>
              <Link className={styles.btn} href="/">
                Travel
              </Link>
              <h3 className={styles.categoryTitle}>
                Lorem, ipsum dolor sit amet consectetur.
              </h3>
              <span className={styles.nameDate}>
                <b>John Doe</b> 01.22.2024
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
