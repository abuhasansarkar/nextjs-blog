"use client"

import { ThemeContext } from "@/context/ThemeContext";
import { NightsStayOutlined, WbSunny } from "@mui/icons-material";
import { useContext } from "react";
import styles from "./themeToggle.module.css";
const ThemeToggle = () => {
    const {theme, toggle} = useContext(ThemeContext)
    console.log(theme);
    return (
        <div className={styles.container} onClick={()=>{toggle(!theme)}}>
            <NightsStayOutlined/>
            <div className={styles.ball} style={theme === "light" ? {left: "1px"} : {right:"1px"}}></div>
            <WbSunny/>
        </div>
    );
};

export default ThemeToggle;