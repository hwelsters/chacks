import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import InputButton from "../../components/InputButton";
import Logo from "../../components/Logo";
import PasswordInput from "../../components/PasswordInput";
import { paths } from "../../data/paths";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";

import styles from "./Register.module.css";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e : any) => {
    console.log("REGISTER");
  }

  return (
    <div>
      <Navbar />
      <PageContainer>
        <form
          className={styles.register_block}
          onSubmit={() => console.log("DONE")}
        >
          <div className={styles.logo}>
            <Logo />
          </div>
          <Input
            text="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            text="Password"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <PasswordInput text="Confirm Password" />
          <InputButton text="REGISTER" onClick={handleSubmit}/>

          <div className={styles.bottom}>
            <p>Have an account?</p>
            <Link className={styles.link} to={paths.login}>
              Login
            </Link>
          </div>
        </form>
      </PageContainer>
      <Footer />
    </div>
  );
}
