import Image from "next/image";
import Link from "next/link";
import styles from "./featured.module.css";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, AbuHasan is Here !</b> Discover my stories and crative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" fill alt="featured" />
        </div>
        <div className={styles.textContainer}>
         <h2 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
         <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni similique expedita voluptates debitis deserunt dolorum ea omnis, nesciunt exercitationem, assumenda molestias dolorem laudantium error quo perspiciatis vero, aspernatur ipsam!</p>
         <Link className={styles.readMoreBtn} href="/"> Read More...</Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
