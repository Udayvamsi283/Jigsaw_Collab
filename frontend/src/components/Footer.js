import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Jigsaw Collab</h5>
            <p className="mb-0">
              Bringing teams together to create, edit, and perfect documents in
              real-time with integrated video and chat.
            </p>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Product</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Connect with us</h6>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-white fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <p className="small mb-0">
              © {new Date().getFullYear()} Jigsaw Collab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
