"use client";

import { Image, Link, VideoCall } from "@mui/icons-material";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./write.module.css";


const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input
        className={styles.title}
        type="text"
        name="title"
        id="title"
        placeholder="Write Article Title... "
      />
        <div className={styles.media}>
            <button onClick={()=>setOpen(!open)}>+</button>
            {open && <div className={styles.mediaIcons}>
                <button> <Image/> </button>
                <button> <Link/> </button>
                <button> <VideoCall/> </button>
            </div>}
        </div>
      <div className="editor">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>

      <button className={styles.publishBtn}>Publish Now</button>
    </div>
  );
};

export default page;
