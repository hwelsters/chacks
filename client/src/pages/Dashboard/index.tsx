import { useEffect, useState } from "react";

import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";
import { get } from "../../services/apiCalls";
import Request from "./components/Request";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [stuff, setStuff] = useState<any>([]);

  const handleSubmit = async () => {
    const res = await get("posts/requests");
    setStuff(res.data);
    console.log(res.data);
  };

  const bonk = (index:any) => {
    setStuff((arr:any) => {return arr.splice(index, 1)})
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <Navbar />
      <PageContainer>
        <div className={styles.posts}>
          {stuff.map((e: any, index: any) => (
            <Request text={e.text} index={index} bonk={bonk}/>
          ))}
        </div>
      </PageContainer>
      <Footer />
    </div>
  );
}
