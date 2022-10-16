import React from "react";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";

import { paths, testUrls } from "../../data/paths";

import styles from "./Page404.module.css";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <img className={styles.img} src={testUrls.awkwardCat}/>
        <div className={styles.img}>What's that you got there?</div>
        <div className={styles.img}>I wonder what clicking on this ball of yarn will do...</div>
        <Link className={styles.yarn} to={paths.home}>🧶</Link>
      </PageContainer>
      <Footer />
    </div>
  );
}
