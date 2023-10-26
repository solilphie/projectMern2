import {Link } from "react-router-dom";
import homephoto from "./home-photo.png"
const SectionOne = () => {
    return ( 
        <section id="hero" className="d-flex align-items-center">
  <div className="container d-flex flex-column align-items-center justify-content-center aos-init aos-animate" data-aos="fade-up">
    <h1>Find the right candidate for your job</h1>
    <h2>Make your hiring experience easier with Jobify</h2>
    <Link to="/signup" className="btn-get-started scrollto">Sign Up</Link>
    <img src={homephoto} className="img-fluid hero-img aos-init aos-animate" alt data-aos="zoom-in" data-aos-delay={150} />
  </div>
</section>

     );
}
 
export default SectionOne;