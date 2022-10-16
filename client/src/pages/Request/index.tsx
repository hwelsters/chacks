import React from "react";
import UserPost from "../../components/UserPost";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";

export default function Request() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <UserPost sender={false}/>
      </PageContainer>
      <Footer />
    </div>
  );
}
