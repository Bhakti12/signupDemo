import { FunctionComponent, memo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = memo(() => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.welcomeBackParent}>
        <h1 className={styles.welcomeBack}>Welcome back!</h1>
        <h2 className={styles.enterYourCredentials}>
          Enter your Credentials to access your account
        </h2>
      </div>
      <form className={styles.frameGroup}>
        <div className={styles.instanceParent}>
          <div className={styles.inputFieldParent}>
            <div className={styles.inputField}>
              <h3 className={styles.name}>Email address</h3>
            </div>
            <div className={styles.forgotPasswordTextWrapper}>
              <div className={styles.forgotPasswordText}>
                <div className={styles.name1}>Enter your email</div>
              </div>
            </div>
          </div>
          <div className={styles.instanceGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.nameWrapper}>
                <h3 className={styles.name2}>Password</h3>
              </div>
              <div className={styles.orTextWrapper}>
                <div className={styles.orText}>
                  <div className={styles.name3}>Name</div>
                </div>
              </div>
            </div>
            <div className={styles.forgotPassword}>forgot password</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.rememberFor30}>Remember for 30 days</div>
          </div>
        </div>
        <div className={styles.instanceWrapper}>
          <div className={styles.instanceContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.nameContainer}>
                <div className={styles.name4}>Name</div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.nameFrame}>
                  <div className={styles.name5}>Name</div>
                </div>
              </div>
            </div>
            <b className={styles.login}>Login</b>
          </div>
        </div>
        <div className={styles.orWrapper}>
          <div className={styles.or}>Or</div>
        </div>
      </form>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper1}>
            <div className={styles.icons8Google1Parent}>
              <img
                className={styles.icons8Google1}
                alt=""
                src="/icons8google-1.svg"
              />
              <div className={styles.signInWith}>Sign in with Google</div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.icons8AppleLogo1Parent}>
              <img
                className={styles.icons8AppleLogo1}
                loading="eager"
                alt=""
                src="/icons8applelogo-1.svg"
              />
              <div className={styles.signInWith1}>Sign in with Apple</div>
            </div>
          </div>
        </div>
        <div className={styles.dontHaveAnAccountSignUpWrapper}>
          <h3 className={styles.dontHaveAnContainer}>
            <span>{`Don’t have an account?  `}</span>
            <span className={styles.signUp}>Sign Up</span>
          </h3>
        </div>
      </div>
    </div>
  );
});

export default FrameComponent;
