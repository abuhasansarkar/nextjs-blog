import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">AbuHasan.</Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          eveniet porro optio harum numquam nihil illum officia cum expedita
          dicta, eius voluptates consequuntur sapiente laboriosam cupiditate ea
          obcaecati, quae quo?
        </p>
      </div>
      <div className={styles.allLinks}>
        <div className={styles.links}>
        <h2>Links</h2>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Services</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className={styles.tags}>
        <h2>Tags</h2>
        <Link href="/">Style</Link>
        <Link href="/">Fashion</Link>
        <Link href="/">Coding</Link>
        <Link href="/">Travel</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
      </div>
      <div className={styles.socaiel}>
      <h2>Social</h2>
        <Link href="/">Linkedin</Link>
        <Link href="/">Github</Link>
        <Link href="/">Facebook</Link>
        <Link href="/">Instagram</Link>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
