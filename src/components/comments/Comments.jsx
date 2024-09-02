import Image from "next/image";
import Link from "next/link";
import styles from "./comments.module.css";
const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status === "authenticated" ? (
        <div>
          <form className={styles.write}>
            <textarea
              className={styles.textArea}
              name="comment"
              id="comment"
              placeholder="Write a comment....."
              rows={2}
            ></textarea>
            <button className={styles.commentBtn}>Comment</button>
          </form>
        </div>
      ) : (
        <Link href="/login">Please Login to write Comments</Link>
      )}
{/* Comment  */}
      <div className={styles.Comments}>
        <div className={styles.comment}>
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
          <div className={styles.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo  eaque inventore!</div>
        </div>
      </div>
      <div className={styles.Comments}>
        <div className={styles.comment}>
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
          <div className={styles.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo  eaque inventore!</div>
        </div>
      </div>
      <div className={styles.Comments}>
        <div className={styles.comment}>
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
          <div className={styles.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo  eaque inventore!</div>
        </div>
      </div>


 
    </div>
  );
};

export default Comments;
