import { Facebook, GitHub, Google } from "@mui/icons-material";
import styles from "./register.module.css";
const page = () => {
  return (
    <div className={styles.container}>
      <h1>Create Account</h1>
      <form className={styles.form}>
        <div className="">
          <label htmlFor="name">Enter your full name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="">
          <label htmlFor="email">Enter your email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="">
          <label htmlFor="password">Enter your password</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
          />
        </div>

        <button className={styles.button}>Create</button>
      </form>

      <div className={styles.social}>
        <button>
          {" "}
          <Google />{" "}
        </button>
        <button>
          {" "}
          <GitHub />{" "}
        </button>
        <button>
          {" "}
          <Facebook />{" "}
        </button>
      </div>
    </div>
  );
};

export default page;
