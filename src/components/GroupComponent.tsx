import { FunctionComponent, memo } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = memo(() => {
  return (
    <div className={styles.getStartedFrameParent}>
      <div className={styles.getStartedFrame}>
        <h1 className={styles.getStartedNow}>Get Started Now</h1>
      </div>
      <div className={styles.enterYourCredentials}>
        Enter your Credentials to access your account
      </div>
      <form className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.nameFrameParent}>
            <div className={styles.nameFrame}>
              <div className={styles.name}>Name</div>
            </div>
            <div className={styles.signInLabelFrameWrapper}>
              <div className={styles.signInLabelFrame}>
                <div className={styles.enterYourName}>Enter your name</div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.nameWrapper}>
              <div className={styles.name1}>Email address</div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.nameContainer}>
                <div className={styles.name2}>Enter your email</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.nameWrapper1}>
              <div className={styles.name3}>Password</div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.nameWrapper2}>
                <div className={styles.name4}>Name</div>
              </div>
            </div>
          </div>
          <div className={styles.termsPolicyFrameParent}>
            <div className={styles.termsPolicyFrame} />
            <div className={styles.iAgreeToContainer}>
              {`I agree to the `}
              <span className={styles.termsPolicy}>{`terms & policy`}</span>
            </div>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.frameParent1}>
            <div className={styles.nameWrapper3}>
              <div className={styles.name5}>Name</div>
            </div>
            <div className={styles.signInWithFrame}>
              <div className={styles.nameWrapper4}>
                <div className={styles.name6}>Name</div>
              </div>
            </div>
          </div>
          <b className={styles.login}>Signup</b>
        </div>
      </form>
      <div className={styles.signinButtons}>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameOr}>
            <div className={styles.or}>Or</div>
          </div>
        </div>
      </div>
      <div className={styles.imagePlaceholder}>
        <div className={styles.frameSigninWithGoogleApple}>
          <div className={styles.frameFrameIcons}>
            <div className={styles.signInTexts}>
              <img
                className={styles.icons8Google1}
                alt=""
                src="/icons8google-1.svg"
              />
              <div className={styles.signInWith}>Sign in with Google</div>
            </div>
          </div>
          <div className={styles.frameFrameIcons1}>
            <div className={styles.icons8AppleLogo1Parent}>
              <img
                className={styles.icons8AppleLogo1}
                alt=""
                src="/icons8applelogo-1.svg"
              />
              <div className={styles.signInWith1}>Sign in with Apple</div>
            </div>
          </div>
        </div>
        <div className={styles.frameChrisLeeltDAIrMunsp}>
          <div className={styles.frameHaveAnAccountSignIn}>
            <div className={styles.haveAnAccountSignInWrapper}>
              <div className={styles.haveAnAccountContainer}>
                <span>{`Have an account?  `}</span>
                <span className={styles.signIn}>Sign In</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default GroupComponent;
