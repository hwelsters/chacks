import UserPost from "../../components/UserPost";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <div className={styles.postSection}>
          <UserPost sender/>
          <UserPost sender/>
          <UserPost sender/>
        </div>
      </PageContainer>
      <Footer/>
    </div>
  );
}
