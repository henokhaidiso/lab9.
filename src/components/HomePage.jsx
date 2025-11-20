import "../App.css";{
}
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedInUser");

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/login"); // go back to login
  }

  return (
    <div className="homepage">
      <h1>Welcome {user ? user : "Guest"} to the Homepage!</h1>
      <nav className="navbars">
        <a ClassName="navb" href="/">Home</a>
        <a className="navb" href="/posts">Blog</a>
        <a className="navb" href="/contact">Contact</a>
        <button className="log-btn" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="cont">
        <h3 className="student">My name is {user? user:"Guest"} I am a Computer Science Student at UNCC.</h3>
      </div>

      <div className="img-cont">
        <div className="img">
          <img src="https://www.charlotte.edu/wp-content/uploads/2025/01/UNCChar_23010_campus_09-05-2017_img305_KL-1-1180x787.jpg" ></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
