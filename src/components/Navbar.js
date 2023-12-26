import {Link } from "react-router-dom";
import image from "./jobifyfinale.png"
const Navbar = () => {
    return (
     <>
     <header id="header" className="fixed-top">
  <div className="container d-flex align-items-center justify-content-between">
  <a href="/"><img src={image} style={{width:"130px"}}/></a>
  
    <nav id="navbar" className="navbar">
      <ul>
      <li><a className="nav-link scrollto active" href="/">Home</a></li>
        <li><a className="nav-link scrollto" href="/#about">About</a></li>
        <li><a className="nav-link scrollto" href="/#features">services</a></li>
        <li><a className="nav-link scrollto" href="/#services">Features</a></li>

        <li><Link className="getstarted scrollto" to="/log">LogIn</Link></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
  </div>
</header>

</>

    );
}

export default Navbar;