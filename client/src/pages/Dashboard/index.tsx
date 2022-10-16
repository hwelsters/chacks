import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";
import Request from "./components/Request";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <div className={styles.posts}>
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
        </div>
      </PageContainer>
      <Footer />
    </div>
  );
}
