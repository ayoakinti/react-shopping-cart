import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function ForgotPassword() {
  const handleForgotPassword = () => {
    console.log("Logged in");
  };
  return (
    <div className="auth-container">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="auth-content">
              <div className="auth-header">
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <p>Recover your password</p>
              </div>
              <div className="auth-form">
                <form onSubmit={handleForgotPassword}>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="auth-btn" type="submit">
                      Recover password
                    </button>
                  </div>
                </form>
              </div>
              <div className="auth-footer">
                Don't have an account? <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
