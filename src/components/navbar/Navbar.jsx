"use client";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import ReorderIcon from "@mui/icons-material/Reorder";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="/">
          <GitHub />
        </Link>
        <Link href="/">
          <LinkedIn />
        </Link>{" "}
        <Link href="/">
          <Instagram />
        </Link>
        <Link href="/">
          <Facebook />
        </Link>
      </div>
      <div className={styles.logo}>
        <Link href="/"> AbuHasan.</Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <span
          onClick={() => setOpen(!open)}
          className={styles.responsiveBarIcon}
        >
          <ReorderIcon />
        </span>
        <div className={styles.linkItem}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/login">Login</Link>
          <Link href="/write">Write</Link>
        </div>
        {/* Mobile Nav */}
        {open && (
          <div className={styles.mobileLinkItem}>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/login">Login</Link>
            <Link href="/write">Write</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
