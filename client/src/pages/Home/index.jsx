import { useState } from "react";
import Searchbar from "../../components/Searchbar";
import UserPost from "../../components/UserPost";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";
import { get, post } from "../../services/apiCalls";

import styles from "./Home.module.css";

export default function Home() {
  const [results, setResults] = useState([]);

  const handleSearch = async (from, to) => {
    const res = await post("posts/getus", { pickup: from, dropoff: to });
    setResults(res.data);
  };
  
  const createString = (e) => {
    let str = "";
    if (e.pickup) str += "Pickup: " + e.pickup + "\n";
    if (e.dropoff) str += "Dropoff: " + e.dropoff + "\n";
    str += e.text;
    return str;
  };

  return (
    <div>
      <Navbar />

      <div className={styles.footer}>
        <Searchbar text="SEARCH" onSubmit={handleSearch} />
      </div>

      <PageContainer>
        {results.map((e)=>(
          <UserPost username={e.username} text={createString(e)} sender/>
        ))}
      </PageContainer>
      <Footer />
    </div>
  );
}