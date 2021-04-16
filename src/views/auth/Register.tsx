import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { RegisterInput } from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { register } from "../../actions/auth";
import Loader from "../../components/Loader";
import { addToCart } from "../../actions/cart";

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");

  const [registerInput, setRegisterInput] = useState<RegisterInput>({
    name: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });

  const handleFirstNameChange = (e: any) => {
    registerInput.name.firstName = e.target.value;
  };

  const handleLastNameChange = (e: any) => {
    registerInput.name.lastName = e.target.value;
  };

  const handleEmailChange = (e: any) => {
    setRegisterInput({
      ...registerInput,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e: any) => {
    setRegisterInput({
      ...registerInput,
      password: e.target.value,
    });
  };

  const closeToast = () => {
    setMessage("");
  };

  const handleRegister = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(register(registerInput));
      let cartInput: any = localStorage.getItem("cartInput");
      if (cartInput && cartInput.length > 0) {
        cartInput = JSON.parse(cartInput);
        for (let i = 0; i < cartInput.length; i++){
          await dispatch(addToCart(cartInput[i]));
        }
        localStorage.removeItem('cartInput')
        localStorage.removeItem('cartOutput')
      }
      history.push("/cart");
      setLoading(false);
    } catch (error) {
      setMessage(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div className="auth-container">
      {loading && <Loader />}
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
          <div className="col-lg-6 d-flex justify-content-center">
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
                          onChange={handleFirstNameChange}
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
                          onChange={handleLastNameChange}
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
                      onChange={handleEmailChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="******"
                      onChange={handlePasswordChange}
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
