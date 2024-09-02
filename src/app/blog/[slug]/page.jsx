import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import styles from "./singleBlog.module.css";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="/p1.jpeg"
           fill
            alt="featured"
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <div className={styles.userInfo}>
            <Image
              className={styles.userImage}
              src="/p1.jpeg"
              width={50}
              height={50}
              alt="userImage"
            />
            <div className={styles.user}>
              <b>AbuHasan</b>
              <i className={styles.date}>Date: 01.22.2024</i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.postContent}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel
            ipsum reiciendis error? Id deserunt deleniti repudiandae delectus
            ullam voluptatem quod nihil atque sunt? Doloribus architecto sit id
            magni voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laborum tempore quibusdam ex nobis, excepturi ratione odit nam
            voluptatem fuga dolorum itaque? Laudantium maxime aperiam sed quo
            dolorum dicta velit neque! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium cumque quisquam obcaecati, soluta
            molestias fugit amet pariatur debitis facere deserunt esse placeat
            quia magnam unde eaque officia iste eum sed? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perspiciatis velit iusto, at fuga
            deserunt ducimus, repellendus odit vel culpa non cupiditate fugiat
            aut commodi dicta accusamus porro beatae veniam excepturi?
          </div>

          {/* Commets Area */}

          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
