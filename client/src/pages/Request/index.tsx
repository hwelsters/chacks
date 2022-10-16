import React from "react";
import UserPost from "../../components/UserPost";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";
import RequestInput from "./components/RequestInput";

export default function Request() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <UserPost sender={false}/>
        <RequestInput/>
      </PageContainer>
      <Footer />
    </div>
  );
}
