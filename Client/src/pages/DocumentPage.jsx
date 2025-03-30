"use client";

import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DocumentPage = () => {
  const { docId } = useParams();
  const [documentTitle, setDocumentTitle] = useState("Untitled Document");
  const [documentContent, setDocumentContent] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(true);

  // Sample active users
  const activeUsers = [
    { id: "1", name: "John Doe", color: "#F5004F" },
    { id: "2", name: "Jane Smith", color: "#FFAF00" },
    { id: "3", name: "Alex Johnson", color: "#7C00FE" },
  ];

  // Sample chat messages
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      user: "John Doe",
      message: "Hey team, I added the introduction section.",
      time: "10:30 AM",
    },
    {
      id: "2",
      user: "Jane Smith",
      message: "Looks good! I'll work on the methodology part.",
      time: "10:32 AM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: Date.now().toString(),
        user: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setChatMessages([...chatMessages, newMsg]);
      setNewMessage("");
    }
  };

  // Generate a shareable link
  const documentLink = `${window.location.origin}/document/${docId}`;

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(documentLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="flex-grow-1 d-flex flex-column">
        {/* Toolbar */}
        <div className="border-bottom p-2 d-flex align-items-center bg-white shadow-sm">
          <input
            type="text"
            className="form-control form-control-sm border-0 fw-bold"
            value={documentTitle}
            onChange={(e) => setDocumentTitle(e.target.value)}
            style={{ maxWidth: "300px" }}
          />

          <div className="btn-group ms-4">
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-type-bold"></i>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-type-italic"></i>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-type-underline"></i>
            </button>
          </div>

          <div className="btn-group ms-2">
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-text-left"></i>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-text-center"></i>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-text-right"></i>
            </button>
          </div>

          <div className="btn-group ms-2">
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-list-ul"></i>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-list-ol"></i>
            </button>
          </div>

          <div className="btn-group ms-2">
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-link-45deg"></i>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-image"></i>
            </button>
          </div>
        </div>

        <div className="flex-grow-1 d-flex">
          {/* Left sidebar - Video section */}
          <div className="video-section" style={{ width: "280px" }}>
            <div className="p-3">
              <h5 className="mb-3 text-white fw-bold">Video Collaboration</h5>
              <div className="d-grid gap-3">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="video-container"
                    style={{ height: "150px" }}
                  >
                    <div className="user-badge">
                      <i className="bi bi-person-fill me-1"></i>
                      {index === 1 ? "You" : `User ${index}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-grow-1 d-flex flex-column">
            {/* Document content */}
            <div className="flex-grow-1 p-4 d-flex justify-content-center bg-light">
              <div
                className="document-editor shadow-sm p-5"
                style={{
                  width: "816px", // A4 width at 96 DPI
                  minHeight: "1056px", // A4 height
                  outline: "none",
                  direction: "ltr", // Fix for text direction
                }}
                contentEditable={true}
                onInput={(e) =>
                  setDocumentContent(e.currentTarget.textContent || "")
                }
                suppressContentEditableWarning={true}
              >
                {documentContent}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="chat-section" style={{ width: "280px" }}>
            {/* Document info and active users */}
            <div className="p-3 border-bottom">
              <h6 className="fw-bold mb-3">Document Link</h6>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={documentLink}
                  readOnly
                />
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button"
                  onClick={copyLinkToClipboard}
                >
                  <i className="bi bi-clipboard"></i>
                </button>
              </div>

              <h6 className="fw-bold mb-2">Active Users</h6>
              <div className="d-flex flex-column gap-2">
                {activeUsers.map((user) => (
                  <div key={user.id} className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-2"
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: user.color,
                        color: "white",
                      }}
                    >
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <span>{user.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat section */}
            <div
              className="d-flex flex-column"
              style={{ height: "calc(100vh - 56px - 170px)" }}
            >
              <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                <h6 className="fw-bold mb-0">Chat</h6>
                <button
                  className="btn btn-sm btn-link text-decoration-none p-0"
                  onClick={() => setIsChatOpen(!isChatOpen)}
                >
                  {isChatOpen ? "Minimize" : "Expand"}
                </button>
              </div>

              {isChatOpen && (
                <>
                  <div className="flex-grow-1 p-3 overflow-auto">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="fw-bold small">{msg.user}</span>
                          <span className="text-muted small">{msg.time}</span>
                        </div>
                        <p className="mb-0 small">{msg.message}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 border-top mt-auto">
                    <form onSubmit={handleSendMessage}>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button
                          className="btn btn-sm"
                          type="submit"
                          style={{ backgroundColor: "#7C00FE", color: "white" }}
                        >
                          <i className="bi bi-send"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentPage;
