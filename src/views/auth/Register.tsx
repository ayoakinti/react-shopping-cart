import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Register() {
  const [message, setMessage] = useState<string>("");

  const closeToast = () => {
    setMessage("");
  };

  const handleRegister = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setMessage(
      "Cool! Now we have established that this works. \nKindly go back to the Login page to login."
    );
  };
  return (
    <div className="auth-container">
      {message && (
        <div className="toast bg-info">
          <div className="row align-items-center">
            <div className="col-10 overflow-x-hidden">{message}</div>
            <div className="col-2">
              <FontAwesomeIcon
                onClick={closeToast}
                className="ml-2 cursor-pointer"
                icon={faTimes}
              />
            </div>
          </div>
        </div>
      )}
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
