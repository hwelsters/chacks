import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import InputButton from "../../components/InputButton";
import Logo from "../../components/Logo";
import PasswordInput from "../../components/PasswordInput";
import { paths } from "../../data/paths";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";
import { post } from "../../services/apiCalls";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import styles from "./Register.module.css";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setError("");
    if (username === "") setError("Username is required");
    else if (email === "") setError("Email is required");
    else if (password !== confirmPassword) setError("Passwords don't match");
    else {
      try {
        const res = await post("auth/register", {
          username: username,
          email: email,
          password: password,
        });

        setError("Profile created");

        const win: Window = window;
        win.location = paths.login;
      } catch (err:any) {
        setError(err.response.data);
        console.log(err);
      }
    }
  };

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
            text="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            text="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            text="Password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <PasswordInput
            text="Confirm Password"
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
          <InputButton text="REGISTER" onClick={handleSubmit} />

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
