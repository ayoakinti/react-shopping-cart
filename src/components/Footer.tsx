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
                <h4>References</h4>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/watch?v=sfmL6bGbiN8"
                      className="nav-link"
                    >
                      Tutorial Motivation
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://themeforest.net/item/fixxo-ecommerce-xd-template/30467287"
                      className="nav-link"
                    >
                      UI Guide
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://fakestoreapi.com/"
                      className="nav-link"
                    >
                      API Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>My Profiles 😎</h4>
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
          </div>
        </div>
        <div className="text-center p-1">2021 Fixxo. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
