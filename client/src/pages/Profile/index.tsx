import React from 'react'
import UserPost from '../../components/UserPost';
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import PageContainer from '../../layouts/PageContainer'

import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div>
        <Navbar/>
        <PageContainer>
            <h2>Noel Ngu</h2>
            <p>Date created:</p>
            <p>01/01/01</p>
            <h3>✨ 5/5 stars ✨</h3>
            <div className={styles.posts}>
                <h3>Feed</h3>
                <UserPost sender/>
            </div>
            <div className={styles.posts}>
                <h3>Reviews</h3>
                <UserPost sender/>
            </div>
        </PageContainer>
        <Footer/>
    </div>  
  )
}
