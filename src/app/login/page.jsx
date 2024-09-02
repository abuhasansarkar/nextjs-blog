import { Facebook, GitHub, Google } from "@mui/icons-material";
import styles from "./login.module.css";
const page = () => {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form className={styles.form}>
                <div className="">
                     <label htmlFor="email">Enter your email</label>
                <input className={styles.input} type="email" name="email" id="email" />
                
                </div>
               <div className="">
                  <label htmlFor="password">Enter your password</label>
                <input className={styles.input} type="password" name="password" id="password"  />
               </div>
              

                <button className={styles.button}>Login</button>
            </form>

            <div className={styles.social}>
                <button> <Google/> </button>
                <button> <GitHub/> </button>
                <button> <Facebook/> </button>
            </div>

        </div>
    );
};

export default page;