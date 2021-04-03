import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Register() {
  const handleRegister = () => {
    console.log("Registered");
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
                <p>Register</p>
              </div>
              <div className="auth-form">
                <form onSubmit={handleRegister}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="******"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="auth-btn" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="auth-footer">
                Already have an account? <Link to="/login">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
