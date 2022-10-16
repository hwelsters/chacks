import { useContext, useState } from "react";
import { post } from "../../services/apiCalls";
import Searchbar from "../../components/Searchbar";
import TextArea from "../../components/TextArea";
import UserPost from "../../components/UserPost";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";

import styles from "./Profile.module.css";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { paths } from "../../data/paths";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [stuff, setStuff] = useState<any>([]);

  console.log(user);
  const handleSearch = async (from: string, to: string) => {
    console.log("SEARCH")
    const res = await post("posts/create", {
      userId: user.id,
      username: "sender",
      pickup: from,
      dropoff: to,
      text: "",
    });
    console.log(res);
    let win:Window = window;
    win.location = paths.dashboard;
  };

  const createString = (e: any): string => {
    let str = "";
    if (e.pickup) str += "Pickup: " + e.pickup + "\n";
    if (e.dropoff) str += "Dropoff: " + e.dropoff + "\n";
    str += e.text;
    return str;
  };

  return (
    <div>
      <Navbar />
      <PageContainer>
        <h2>Noel Ngu</h2>
        <p>Date created:</p>
        <p>01/01/01</p>
        <h3>✨ 5/5 stars ✨</h3>
        <div className={styles.posts}>
          <h3>Feed</h3>
          <Searchbar text="SUBMIT" onSubmit={handleSearch} />
          {stuff.map((e: any) => {
            <UserPost text={createString(e)} sender />;
          })}
        </div>
        {/* <div className={styles.posts}>
          <h3>Reviews</h3>
          <UserPost sender />
        </div> */}
      </PageContainer>
      <Footer />
    </div>
  );
}
