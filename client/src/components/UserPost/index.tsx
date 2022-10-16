import { paths, testUrls } from "../../data/paths";
import styles from "./UserPost.module.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Link } from "react-router-dom";

type UserPostParams = {
  sender: boolean;
};
export default function UserPost({ sender }: UserPostParams) {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={testUrls.awkwardCat} />
      <div className={styles.text}>
        <Link to={paths.profile}>
          <h4 className={styles.click}>User</h4>
        </Link>
        <p className={styles.date}>1/1/1</p>
        <p className={styles.info}>I want to drop off this cat in SF</p>
        <div className={styles.footer}>
          {sender && (
            <Link to={paths.request}>
              <LocalShippingOutlinedIcon />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
