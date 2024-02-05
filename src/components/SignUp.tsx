import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./Sign up.module.css";

type SignUpType = {
  showSignUp?: boolean;

  /** Style props */
  signUpAccentColor?: CSSProperties["accentColor"];
};

const SignUp: FunctionComponent<SignUpType> = memo(
  ({ showSignUp, signUpAccentColor }) => {
    const signUpStyle: CSSProperties = useMemo(() => {
      return {
        accentColor: signUpAccentColor,
      };
    }, [signUpAccentColor]);

    return (
      showSignUp && (
        <div className={styles.signUp} style={signUpStyle}>
          <div className={styles.signUpInner}>
            <div className={styles.frameWrapper}>
              <GroupComponent />
            </div>
          </div>
          <img
            className={styles.chrisLee70l1tdai6rmUnsplashIcon}
            loading="eager"
            alt=""
            src="/chrislee70l1tdai6rmunsplash-1@2x.png"
          />
        </div>
      )
    );
  }
);

export default SignUp;
