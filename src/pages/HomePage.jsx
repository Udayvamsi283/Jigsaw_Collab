import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import collaborationImage from "../assets/collaboration.webp";
const HomePage = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="container flex-grow-1 d-flex align-items-center py-5">
        <div className="row align-items-center">
          <div className="col-md-6 py-5">
            <div className="position-relative">
              <div
                className="position-absolute"
                style={{
                  top: "-30px",
                  left: "-30px",
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#F9E400",
                  borderRadius: "24px",
                  transform: "rotate(45deg)",
                  zIndex: -1,
                }}
              ></div>
              <h1
                className="display-4 fw-bold mb-4"
                style={{ color: "#7C00FE" }}
              >
                Collaborate on documents like solving a puzzle together
              </h1>
              <p className="lead mb-5">
                Jigsaw Collab brings teams together to create, edit, and perfect
                documents in real-time with integrated video and chat.
              </p>
              <div className="d-flex gap-3 mt-4">
                <Link
                  to="/register"
                  className="btn btn-lg px-4 py-2"
                  style={{
                    backgroundColor: "#F5004F",
                    color: "white",
                    borderRadius: "12px",
                  }}
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="btn btn-lg px-4 py-2"
                  style={{
                    backgroundColor: "#FFAF00",
                    color: "white",
                    borderRadius: "12px",
                  }}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-5">
            <div className="position-relative">
              <div
                className="position-absolute"
                style={{
                  bottom: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#7C00FE",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              ></div>
              <img
                src={collaborationImage}
                alt="Team Collaboration"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
