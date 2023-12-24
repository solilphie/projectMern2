import axiosInstance from '../axios';
import { useState ,useEffect} from "react";
import React from 'react';
//import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import {Link ,useLocation} from "react-router-dom";
import './Applicants.css';



const Applicants = () => {
  const location = useLocation();
  const [a,setA]=useState();
  const job = location.state.data
  console.log({job});
    const [applications, setApplications] = useState({applicationss:null});
    useEffect(() => {
    axiosInstance.get('/apply/applications/'+job.id).then((res) => {
      const applications = res.data;
      setApplications({ applicationss : applications });
      
    });
  }, [setApplications]);
  //console.log("res" ,applications.applicationss);
  const list = applications.applicationss;
  //console.log("list" ,list);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);


    return ( 
      <>
      
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" style={{marginTop:'50px'}}>
      <div className="container">
        <div className="row gy-5 gx-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center mb-5">
            
							<div class="col-md-2 col-sm-2">
              <div className="text-start ps-4">
                <h3 className="mb-3"style={{fontSize:'40px',margin:'20px',width:"200px"}}>{job.title}</h3>
                <span className="text-truncate me-3"style={{fontSize:'20px'}}><i className="fa fa-map-marker-alt text-primary me-2" />company: {job.company}</span>
                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2" /></span>
                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />Posted date: {job.published} </span>
              </div>
    </div></div>
            <div className="mb-5">
              <h4 className="mb-3" style={{fontSize:'20px',margin:'20px'}}>Job description</h4>
              <p>{job.content}</p>
            </div>
          </div>
        </div>
     </div>
    </div>
    

  <div className="container-xxl py-5" style={{marginTop:"50px"}}>
  <div className="container">
    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s"style={{fontSize:'45px'}}>Applicants</h1>
    <Link to={"/ranks/"+job.id} state={{data : list}} ><button className="btn btn-primary"style={{fontSize:'20px',margin:'20px'}}>view rank</button></Link>

    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
      
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          

        {list && list.map((application) => {
          const resumefile = application.resume.substr(22,);
          //const jobid = post.id;
          //console.log(resumefile)
			return (
        
          <div className="job-item p-4 mb-4" >
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} app={a}>
            
                  </Popup>
                  <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                  <h3>My Timed Popup</h3>
                  <p>This is my time triggered popup</p>
                </Popup>
            <div className="row g-4">
              <div className="col-sm-12 col-md-8 d-flex align-items-center">
                
                <div className="text-start ps-4">
                  <h3 className="mb-3" style={{fontSize:'20px',margin:'20px'}}>{application.name}</h3>
                  <div className="text-truncate me-3" style={{marginLeft:"20px", fontSize:"13px"}}>{application.published}</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                <div className="d-flex mb-3">
                  <button className="btn btn-primary"  onClick={() => {setButtonPopup(true) ;setA(application);}} >View more details</button>
                </div>
              </div>
            </div>
          </div>
            );})}
          
        </div>
      </div>
    </div>
  </div>
</div>
</>

     );
}
 
export default Applicants;