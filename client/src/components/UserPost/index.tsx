import { paths, testUrls } from "../../data/paths";
import styles from "./UserPost.module.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Link } from "react-router-dom";

type UserPostParams = {
  sender: boolean;
  children?: React.ReactNode;
};

export default function UserPost({ sender, children }: UserPostParams) {
  return (
    <div className={styles.big_root}>
      <div className={styles.root}>
        <img className={styles.img} src={testUrls.awkwardCat} />
        <div className={styles.text}>
          <Link to={paths.profile}>
            <h4 className={styles.click}>User</h4>
          </Link>
          <p className={styles.date}>1/1/1</p>
          <p className={styles.info}>Pickup location: SF</p>
          <p className={styles.info}>Drop off location: Tempe</p>
          <p className={styles.info}>Going to SF for vacation</p>
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
