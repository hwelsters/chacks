import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { loginCall } from "../../services/apiCalls";

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
  const { isFetching, error, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    console.log("LOGIN");
    event.preventDefault();

    const res = await loginCall({ email: email, password: password }, dispatch);
    console.log(res);

    const win = window;
    win.location = paths.home;
  };
  return (
    <div>
      <Navbar />
      <PageContainer>
        <div className={styles.login_block}>
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputButton text="LOGIN" onClick={handleSubmit} />
          <div className={styles.bottom}>
            <p>Don't have an account?</p>
            <Link className={styles.link} to={paths.register}>
              Register
            </Link>
          </div>
        </div>
      </PageContainer>
      <Footer />
    </div>
  );
}
