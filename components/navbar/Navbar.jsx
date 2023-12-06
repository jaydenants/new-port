"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";



const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "contact",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Projects",
    url: "/blog",
  },
  {
    id: 4,
    title: "About Me",
    url: "/about",
  },
];

const Navbar = () => {
  
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
    <h1>J</h1>
      </Link>
      <div className={styles.links}>
       
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      
       
      </div>
    </div>
  );
};

export default Navbar;
