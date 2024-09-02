import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.image} fill src="/p1.jpeg" alt="featured image"/>
            </div>
            <div className={styles.textContainer}>
                <div> <span className={styles.date}>11.02.2024 - </span>
                <span className={styles.category}>CALTURE</span></div>
               
                <h2 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi ea voluptatem.</h2>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore cupiditate dolor expedita aliquam ex est, et earum neque nesciunt animi mollitia modi aut, repudiandae amet soluta nisi recusandae assumenda?</p>

                <Link href="/blog/:slug">Read More...</Link>
            </div>
        </div>
    );
};

export default Card;