import logo from "../assets/images/accoric-logo-new.png";
import arrowImage from "../assets/images/arrow.svg";
import logoFacebook from "../assets/images/logo-facebook.svg";
import logoLinkedin from "../assets/images/logo-linkedin.svg";
import logoInstagram from "../assets/images/logo-instagram.svg";
import footerText from "../assets/images/footer-text.svg";

function Footer({ openPopup }) {
  return (
    <>
      <footer class="main-footer">
        <div class="container gradient-container">
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <div class="gradient-box1"></div>
              <div class="gradient-box2"></div>

              <h2 class="">Compliance Shouldn’t Depend on Best Effort</h2>
            </div>

            <div class="col-lg-4 col-md-4">
              <div class="btns-wrp pull-right">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={openPopup}
                >
                  <span>
                    Request a conversation{" "}
                    <img src={arrowImage} alt="arrow"></img>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="fmenu-container">
          <div class="row b-footer">
            <div class="col-md-4 b-col first">
              <div>
                <a href="#">
                  <img src={logo} alt="Accoric Management" />
                </a>
                <div class="s-content">
                  Accoric is a leading provider of innovative solutions for
                  safety and compliance.
                </div>
                <div class="s-icons">
                  <a href="#">
                    <img src={logoLinkedin} alt="linkedin"></img>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61577145156368">
                    <img src={logoFacebook} alt="facebook"></img>
                  </a>
                  <a href="https://www.instagram.com/accoric.co/">
                    <img src={logoInstagram} alt="instagram"></img>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-2 b-col">
              <h3 class="fmenu-heading">quick links</h3>
              <ul class="fmenu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/accoric-management">Accoric Management</a>
                </li>
                <li>
                  <a href="/about-us">About us</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 b-col">
              <h3 class="fmenu-heading">Company</h3>
              <ul class="fmenu">
                {/* <li>
                  <a asp-controller="Blog" asp-action="Index">
                    Blogs
                  </a>
                </li> */}
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a asp-controller="Home" asp-action="ContactUs">
                    Certificate Training
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 b-col">
              <h3 class="fmenu-heading">contact</h3>
              <p>Call us</p>
              <p>+1 516-200-4720</p>
              <p>Email us</p>
              <p>
                <a href="mailto:service@accoric.com">
                  <strong>service@accoric.com</strong>
                </a>
              </p>
              <p>Location</p>
              <p>2/118 Great North Rd, Five Dock NSW 2046</p>
            </div>
          </div>
        </div>

        <div class="container copyright-container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <p>Copyright &copy; 2026 Accoric, All Rights Reserved</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="terms-wrap">
                <p>
                  <a href="/terms-of-service">Terms of Service</a>{" "}
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a href="/privacy-policy">Privacy Policy</a>
                  {/* <a asp-controller="Home" asp-action="PrivacyPolicy">
                    Privacy Policy
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
              <img
                src={footerText}
                alt="Accoric Management"
                class="footer-brainy-txt"
              ></img>
            </div>
          </div>
        </div>
      </footer>

      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <a href="#top-ofthe-page" class="jumper j1" id="moveup">
              <img src="~/images/backtotop-arrw.svg" alt="back to top"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
