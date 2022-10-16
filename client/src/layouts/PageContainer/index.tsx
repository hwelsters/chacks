import styles from "./PageContainer.module.css";

type PageContainerParams = {
    children?: React.ReactNode
};

export default function PageContainer({ children } : PageContainerParams) {
  return <div className={styles.root}>{children}</div>;
}
