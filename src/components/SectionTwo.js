import recommendedjobs from "./recommended jobs service.png"
import ranklist from "./list rank service.png"
import details from "./detailsssservice.png"
const SectionTwo = () => {
  return ( 
      <main id="main">
{/* ======= About Section ======= */}
<section id="about" className="about">
  <div className="container">
    <div className="row no-gutters">
      <div className="content col-xl-5 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-right">
        <div className="content">
          <h3>About Us</h3>
          <p>
            jobify is a web application with a main focus of connecting recruiters with job seekers </p>
          <p>It uses latest technology of Machine Learning and Artificial Intelligence to match the best suited candidate with the job </p>
            

          
         
        </div>
      </div>
      <div className="col-xl-7 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-left">
        <div className="icon-boxes d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-receipt" />
              <h4>Mission</h4>
              <p>Jobify's main goal is to make the hiring experience exponentially easier 
by automatically ranking applicants for jobs.</p>
            </div>
            <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-cube-alt" />
              <h4>Vision</h4>
              <p>Jobify aims to be a apart of every recruiting department in Startups , Enterprises and compannies around the globe</p>
            </div>
            <div className="col-md-6 icon-box aos-init" data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-images" />
              <h4>Values </h4>
              <p><ul><li style={{listStyleType: "none"}}>integrity </li>
              <li style={{listStyleType: "none"}}>responsability </li>

              <li style={{listStyleType: "none"}}>simplicity  </li></ul></p>
            </div>
            <div className="col-md-6 icon-box aos-init" data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-shield" />
              <h4>Privacy</h4>
              <p>jobify is committed to respecting the privacy of our users and complying with Privacy laws</p>
            </div>
          </div>
        </div>{/* End .content*/}
      </div>
    </div>
  </div>
</section>{/* End About Section */}

{/* ======= Features Section ======= */}
<section id="features" className="features aos-init" data-aos="fade-up">
  <div className="container">
    <div className="section-title">
      <h2>services</h2>
      <p style={{fontSize:'40px'}}>Here are some of our services</p>
    </div>
    <div className="row content">
      <div className="col-md-5 aos-init" data-aos="fade-right" data-aos-delay={100}>
        <img src={recommendedjobs} className="img-fluid" alt />
      </div>
      <div className="col-md-7 pt-4 aos-init" data-aos="fade-left" data-aos-delay={100}>
        <h3>The employee can get recommended jobs depends on his domain  </h3>
        
      </div>
    </div>
    <div className="row content">
      <div className="col-md-5 order-1 order-md-2 aos-init" data-aos="fade-left">
        <img src={ranklist} className="img-fluid" alt />
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1 aos-init" data-aos="fade-right">
        <h3>The employer can get the ranking of each applicants to the job </h3>
        
      </div>
    </div>
    <div className="row content">
      <div className="col-md-5 aos-init" data-aos="fade-right">
        <img src={details} className="img-fluid" alt />
      </div>
      <div className="col-md-7 pt-5 aos-init" data-aos="fade-left">
        <h3>The employer can consult all information of the ranked applicants and its resume's extracted details </h3>
        
      </div>
    </div>
    
    
  </div>
</section>{/* End Features Section */}

{/* ======= Services Section ======= */}
<section id="services" className="services">
  <div className="container aos-init" data-aos="fade-up">
    <div className="section-title">
      <h2>Features</h2>
      
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init" data-aos="fade-up" data-aos-delay={100}>
        <div className="icon-box">
          <div className="icon"><i className="bx bxl-dribbble" /></div>
          <h4 className="title"><a href>Free</a></h4>
          <p className="description">Jobify is free to use , our services are completely free and don't require any payment or subscription at all. </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init" data-aos="fade-up" data-aos-delay={200}>
        <div className="icon-box">
          <div className="icon"><i className="bx bx-file" /></div>
          <h4 className="title"><a href>Simple </a></h4>
          <p className="description">Jobify is as simple to use as posting a job offer and laying back watching it do the rest. </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init" data-aos="fade-up" data-aos-delay={300}>
        <div className="icon-box">
          <div className="icon"><i className="bx bx-tachometer" /></div>
          <h4 className="title"><a href>Fast</a></h4>
          <p className="description">Jobify is optimized to be as fast as can be. it only takes a second to upload a job offer and even less to scan a resume. </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init" data-aos="fade-up" data-aos-delay={400}>
        <div className="icon-box">
          <div className="icon"><i className="bx bx-layer" /></div>
          <h4 className="title"><a href>Forever</a></h4>
          <p className="description">Jobify will keep all the job offers and resumes related to them safe and secure until you choose to delete them. </p>
        </div>
      </div>
    </div>
  </div>
</section>{/* End Services Section */}


       
       

{/* ======= Contact Section ======= */}
<section id="contact" className="contact section-bg">
  <div className="container aos-init" data-aos="fade-up">
    <div className="section-title">
      <h2>Contact</h2>
    </div>
    <div className="row">
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="info-box">
              <i className="bx bx-map" />
              <h3>Our Address</h3>
              <p>Arab League Street,Kélibia</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-box mt-4">
              <i className="bx bx-envelope" />
              <h3>Email Us</h3>
              <p>khalil.selmi.dev@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-box mt-4">
              <i className="bx bx-phone-call" />
              <h3>Call Us</h3>
              <p>+216 25 126 899<br />+216 55 343 224</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>{/* End Contact Section */}
</main>

   );
}

export default SectionTwo;