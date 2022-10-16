import {Link} from "react-router-dom";

import Input from "../../components/Input";
import InputButton from "../../components/InputButton";
import Logo from "../../components/Logo";
import PasswordInput from "../../components/PasswordInput";
import { paths } from "../../data/paths";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";

import styles from "./Login.module.css";

export default function Login() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <div className={styles.login_block}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Input text="Username" type="text"/>
          <PasswordInput text="Password"/>
          <InputButton text="LOGIN"/>
          <div className={styles.bottom}>
            <p>Don't have an account?</p>
            <Link className={styles.link} to={paths.register}>Register</Link>
          </div>
        </div>
      </PageContainer>
      <Footer />
    </div>
  );
}
