import { paths, testUrls } from "../../data/paths";
import styles from "./UserPost.module.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
type UserPostParams = {
  sender: boolean;
  children?: React.ReactNode;
  text?: string;
  username?: string;
};

export default function UserPost({
  sender,
  children,
  text,
  username,
}: UserPostParams) {
  const [image, setImage] = useState<string>("");

  useEffect(()=> {
    setImage(`${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`);
  }, [])

  return (
    <div className={styles.big_root}>
      <div className={styles.root}>
        <img className={styles.img} src={image} />
        <div className={styles.text}>
          <Link to={paths.profile}>
            <h4 className={styles.click}>{username}</h4>
          </Link>
          <p className={styles.date}>01/01/01</p>
          <p className={styles.info}>{text}</p>
          <div className={styles.footer}>
            {sender && (
              <Link to={paths.request}>
                <LocalShippingOutlinedIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
