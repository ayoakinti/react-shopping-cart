// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import twitterIcon from "../assets/images/twitter.svg";
import linkedInIcon from "../assets/images/linkedin.svg";
import githubIcon from "../assets/images/github.svg";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer>
      <div>
        <div
          className="row justify-content-center mx-0"
          style={{ borderBottom: "1px solid #8b8d96" }}
        >
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-3">
                <h4>Customer Service</h4>
                <ul>
                  <li>Help & FAQs</li>
                  <li>Order Lookup</li>
                  <li>Shipping & Delivery</li>
                  <li>Returns</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Customer Service</h4>
                <ul>
                  <li>Help & FAQs</li>
                  <li>Order Lookup</li>
                  <li>Shipping & Delivery</li>
                  <li>Returns</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Customer Service</h4>
                <ul>
                  <li>Help & FAQs</li>
                  <li>Order Lookup</li>
                  <li>Shipping & Delivery</li>
                  <li>Returns</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <div>
                  <h4>Ayo Akinti 😎</h4>
                  <ul className="d-flex align-items-center">
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://ayoakinti.netlify.app/"
                        className="nav-link"
                      >
                        <img
                          src={logo}
                          alt="portfolio"
                          width="20px"
                          height="20px"
                        />
                      </a>
                    </li>
                    <li className="ml-2">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link"
                        href="https://www.linkedin.com/in/ayomideakintimehin/"
                      >
                        <img
                          src={linkedInIcon}
                          alt="githubIcon"
                          width="20px"
                          height="20px"
                        />
                      </a>
                    </li>
                    <li className="ml-2">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/iamayoakinti"
                        className="nav-link"
                      >
                        <img
                          src={githubIcon}
                          alt="githubIcon"
                          width="20px"
                          height="20px"
                        />
                      </a>
                    </li>
                    <li className="ml-2">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/iamayoakinti"
                        className="nav-link"
                      >
                        <img
                          src={twitterIcon}
                          alt="twitterIcon"
                          width="20px"
                          height="20px"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-3 d-flex align-items-center">
                <div>Hi</div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="text-center p-1">2021 Fixxo. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
