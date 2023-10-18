import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub
} from "react-icons/io";
import { IconContext } from "react-icons";
function Footer() {
  return (
    <>
      <br />
      <div class="container-fluid col-md-12">
        <div class="card text-center footer text-white">
          <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
              <li class="nav-item">
                <a
                  class="facebook"
                  href="https://www.facebook.com/DarshanUniversity"
                >
                  <IoLogoFacebook className="facebook" size={50} />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="lin"
                  href="https://www.linkedin.com/school/darshanuniversity/"
                >
                  <IoLogoLinkedin className="lin" size={50} />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="insta"
                  href="https://www.instagram.com/darshanuniversity/"
                >
                  <IoLogoInstagram className="insta" size={50} />
                </a>
              </li>
              <li class="nav-item">
                <a class="git" href="https://github.com/">
                  <IoLogoGithub className="git" size={50} />
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <h5 class="text-dark">Why we?</h5>
                  <p>
                    Buying used luxury cars in India was never this easy. You
                    can now own your dream luxury car in just 4 simple steps at
                    Big Boy Toyz, India's trusted used car portal.
                  </p>
                </div>
                <div class="col-sm">
                  <h5 class="text-dark">GENERAL</h5>
                  <ul>
                    <li>Sell Car</li>
                    <hr />
                    <li>Auto Guide</li>
                    <hr />
                    <li>Car News</li>
                    <hr />
                    <li>Finance & Insurance</li>
                  </ul>
                </div>
                <div class="col-sm">
                  <h5 class="text-dark">BRANDS</h5>
                  <ul>
                    <li>Used Ducati</li>
                    <hr />
                    <li>Used Ferrari</li>
                    <hr />
                    <li>Used Ford</li>
                    <hr />
                    <li>Used Bentley</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
