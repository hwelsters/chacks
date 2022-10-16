import React from "react";
import UserPost from "../../components/UserPost";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";
import TextArea from "../../components/TextArea";

export default function Request() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <UserPost sender={false} />
        <h3>Make a request</h3>
        <TextArea />
      </PageContainer>
      <Footer />
    </div>
  );
}
