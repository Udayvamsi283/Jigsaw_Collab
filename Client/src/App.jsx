import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import DocumentPage from "./pages/DocumentPage"
import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

//<Route path="/document/:docId" element={<DocumentPage />} />

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Switch>
          <Route path="/documents">
            <Redirect to={`/documents/${uuidV4()}`} />
          </Route>
          <Route path="/documents/:id">
            <TextEditor />
          </Route>
        </Switch>
      </Routes>
    </Router>
  );
}

export default App

