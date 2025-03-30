"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [documentLink, setDocumentLink] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);

  // Sample recent documents
  const recentDocuments = [
    { id: "1", title: "Project Proposal", lastEdited: "2 hours ago" },
    { id: "2", title: "Meeting Notes", lastEdited: "1 day ago" },
    { id: "3", title: "Research Summary", lastEdited: "3 days ago" },
  ];

  const handleCreateDocument = () => {
    // Generate a new document ID and navigate to the editor
    const newDocId = Math.random().toString(36).substring(2, 9);
    navigate(`/document/${newDocId}`);
  };

  const handleJoinDocument = (e) => {
    e.preventDefault();
    if (documentLink) {
      // Extract document ID from link or use the link as ID
      const docId = documentLink.split("/").pop() || documentLink;
      navigate(`/document/${docId}`);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="container py-5 flex-grow-1">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="fw-bold mb-4" style={{ color: "#7C00FE" }}>
              Your Dashboard
            </h1>

            <div className="d-flex gap-3 mb-5">
              <button
                className="btn btn-lg px-4 py-3"
                style={{
                  backgroundColor: "#F5004F",
                  color: "white",
                  borderRadius: "12px",
                }}
                onClick={handleCreateDocument}
              >
                <i className="bi bi-plus-lg me-2"></i>
                Create New Document
              </button>

              {showLinkInput ? (
                <form onSubmit={handleJoinDocument} className="d-flex">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Paste document link"
                    value={documentLink}
                    onChange={(e) => setDocumentLink(e.target.value)}
                    style={{ borderRadius: "12px 0 0 12px", minWidth: "300px" }}
                  />
                  <button
                    type="submit"
                    className="btn btn-lg"
                    style={{
                      backgroundColor: "#FFAF00",
                      color: "white",
                      borderRadius: "0 12px 12px 0",
                    }}
                  >
                    Join
                  </button>
                </form>
              ) : (
                <button
                  className="btn btn-lg px-4 py-3"
                  style={{
                    backgroundColor: "#FFAF00",
                    color: "white",
                    borderRadius: "12px",
                  }}
                  onClick={() => setShowLinkInput(true)}
                >
                  <i className="bi bi-link-45deg me-2"></i>
                  Join via Link
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-4">Recent Documents</h2>

            <div className="row g-4">
              {recentDocuments.map((doc) => (
                <div className="col-md-4" key={doc.id}>
                  <Link
                    to={`/document/${doc.id}`}
                    className="text-decoration-none"
                  >
                    <div
                      className="card h-100 border-0 shadow-sm hover-shadow"
                      style={{ borderRadius: "16px" }}
                    >
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="me-3"
                            style={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "#F9E400",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <i className="bi bi-file-text fs-5"></i>
                          </div>
                          <h5 className="card-title mb-0 fw-bold">
                            {doc.title}
                          </h5>
                        </div>
                        <p className="card-text text-muted">
                          Last edited {doc.lastEdited}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              <div className="col-md-4">
                <div
                  className="card h-100 border-0 border-dashed d-flex align-items-center justify-content-center cursor-pointer"
                  style={{
                    borderRadius: "16px",
                    borderWidth: "2px",
                    borderStyle: "dashed",
                    borderColor: "#7C00FE",
                    minHeight: "180px",
                  }}
                  onClick={handleCreateDocument}
                >
                  <div className="card-body text-center">
                    <div
                      className="mx-auto mb-3"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#7C00FE20",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className="bi bi-plus-lg fs-4"
                        style={{ color: "#7C00FE" }}
                      ></i>
                    </div>
                    <h5 className="fw-bold" style={{ color: "#7C00FE" }}>
                      Create New Document
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
