import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
// import profile from "../Assets/profile.jpg"
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav>
      <Link to="/home" className="title">
        PostureCorrection
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
    
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/exercise">Exercises</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>{isAuthenticated && <p>{user.name}</p>}</li>
        {isAuthenticated ? (
          <li>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>;
          </li>
        )}
        {/* <li><button onClick={() => loginWithRedirect()}>Log In</button>;</li>
        <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></li> */}
        {/* <li> <NavLink to="/profile"><img src={profile} alt=""/></NavLink></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
