import { Link } from "react-router-dom";
import logo from "../assets/puzzle.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Jigsaw Collab Logo"
            width="35"
            height="35"
            style={{ marginRight: 10 }}
          />
          <span className="fw-bold fs-3">Jigsaw Collab</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fs-4" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="bi bi-person-circle fs-4"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
