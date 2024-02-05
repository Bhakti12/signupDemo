import { FunctionComponent, memo } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./LogIn.module.css";

const LogIn: FunctionComponent = memo(() => {
  return (
    <div className={styles.logIn}>
      <div className={styles.frameParent}>
        <div className={styles.nameWrapper}>
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.loginLine} />
      <FrameComponent />
      <img
        className={styles.chrisLee70l1tdai6rmUnsplashIcon}
        loading="eager"
        alt=""
        src="/chrislee70l1tdai6rmunsplash-1@2x.png"
      />
    </div>
  );
});

export default LogIn;
