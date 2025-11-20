import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import LoginPage from "./components/LoginPage.jsx";
import HomePage from "./components/HomePage.jsx";
import BlogPostsPage from "./components/BlogPostPage.jsx";
import IndividualPostPage from "./components/IndividualPostPage.jsx";
import ContactPage from "./components/ContactPage.jsx";

function LoginWrapper() {
  const navigate = useNavigate();

  function handleLoginSuccess() {
    navigate("/");   // redirect after login
  }

  return <LoginPage onLogin={handleLoginSuccess} />;
}

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginWrapper />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navbar />
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <ProtectedRoute>
                <Navbar />
                <BlogPostsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <IndividualPostPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Navbar />
                <ContactPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;