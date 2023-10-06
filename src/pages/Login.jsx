import plane from "../assets/plane.svg";
import sms from "../assets/sms.svg";
import lock from "../assets/lock.svg";
import googleLogin from "../assets/googleLogin.svg";
import facebookLogin from "../assets/facebookLogin.svg";
import appleLogin from "../assets/appleLogin.svg";
import leftMosque from "../assets/leftMosque.svg";
import rightMosque from "../assets/rightMosque.svg";
import or from "../assets/or.svg";

const Login = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="hero">
          <h1>Travelista Tours</h1>
          <h6>
            Travel is the only purchase that enriches you in ways beyond
            material wealth
          </h6>
        </div>

        <div className="overflow-y form-wrapper">
          <form className="overflow-y ">
            <h1>Welcome</h1>
            <p>Login with Email</p>

            <div className="input-cont">
              <div className="input-field">
                <img src={sms} />
                <label htmlFor="email">Email Id</label>
                <input type="email" id="email" required />
              </div>

              <div className="input-field password">
                <img src={lock} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
            </div>

            <h6>Forgot your password?</h6>

            <button className="login">Login</button>

            <span className="or">OR</span>

            <div className="social-login">
              <button>
                <a href="https://travelista-by-zion.netlify.app/">
                  <img src={googleLogin} alt="" />
                </a>
              </button>

              <button>
                <a href="https://travelista-by-zion.netlify.app/">
                  <img src={facebookLogin} alt="" />
                </a>
              </button>

              <button>
                <a href="https://travelista-by-zion.netlify.app/">
                  <img src={appleLogin} alt="" />
                </a>
              </button>
            </div>

            <h5>
              Don’t have account?{" "}
              <b>
                <a href="https://travelista-by-zion.netlify.app/">Register Now</a>
              </b>
            </h5>
          </form>

          <>
            <img src={leftMosque} alt="" className="left-mosque" />
            <img src={rightMosque} alt="" className="right-mosque" />
          </>
        </div>
      </div>
    </main>
  );
};

export default Login;
