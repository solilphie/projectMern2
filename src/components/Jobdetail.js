import "./Employee.css"
import { useLocation } from "react-router-dom";
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect } from "react";
import {Link } from "react-router-dom";

const Jobdetail = (props) => {
  const [userId, setUserId] = useState({userIdd:null});
  useEffect(() => {
    axiosInstance.get('user/getuser/').then((res) => {
      const iduser = res.data;
      setUserId({ userIdd : iduser });
      console.log("res" ,userId.userIdd);
      
    });
  }, [setUserId]); 
  const location = useLocation();
  const history = useNavigate();

  const job = location.state.data
  //console.log(job)

  const initialFormData = Object.freeze({
    //jobid:job.id,
    name:"",
    email: '',
    //resume: null,
    coverletter: '',
    });
    const [formData, updateFormData] = useState(initialFormData);
    const [postResume, setPostResume] = useState(null);
    const handleChange = (e) => {
      if ([e.target.name] == 'resume') {
        
        setPostResume({
          resume : e.target.files[0],
        });
          // Trimming any whitespace
          console.log(e.target.files[0]);
      }

		  //if ([e.target.name] === 'title') {
		  //	updateFormData({
		  //		...formData,
		  //		// Trimming any whitespace
		  //		[e.target.name]: e.target.value.trim(),
		  //	});
		  //} else {
		  	updateFormData({
		  		...formData,
		  		// Trimming any whitespace
		  		[e.target.name]: e.target.value.trim(),
		  	});
		  //}
	};



  const handleSubmit = (e) => {
    e.preventDefault();


  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
	 const URL = 'http://127.0.0.1:8000/api/apply/';
	 let formDataf = new FormData();
	formDataf.append('jobid', job.id);
	formDataf.append('author', userId.userIdd.id);
	formDataf.append('name', formData.name);
	formDataf.append('email', formData.email);
	formDataf.append('resume', postResume.resume);
   formDataf.append('coverletter', formData.coverletter);
	 axiosInstance
	 	.post(URL, formDataf, config)
	 	.then((res) => {
	 		console.log(res.data);
      history('/specialjoblist');
	 	})
	 	.catch((err) => console.log(err));
	};

   

  //const handleFile = (e) => {
  //  e.preventDefault();
  //  
  //}
  
  
    return ( 
        
<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="row gy-5 gx-4">
      <div className="col-lg-8">
        <div className="d-flex align-items-center mb-5">
         
        <div class="col-md-2 col-sm-2"style={{width: "1000px"}} >
              <div className="text-start ps-4">
                <h3 className="mb-3"style={{fontSize:'40px',margin:'20px',width:"1000px"}}>{job.title}</h3>
                <span className="text-truncate me-3"style={{fontSize:'20px'}}><i className="fa fa-map-marker-alt text-primary me-2" />company: {job.company}</span>
                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2" /></span>
                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />Posted date: {job.published.substring(0, 10)} </span>
        </div></div></div>
        <div className="mb-5">
          <h4 className="mb-3" style={{fontSize:'20px',margin:'20px'}}>Job description</h4>
          <p>{job.content}</p>
          
          
        </div>
        <div className>
          <h4 className="mb-4">Apply For The Job</h4>
          <form>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input type="text" className="form-control" placeholder="Your Name" name="name" onChange={handleChange}/>
              </div>
              <div className="col-12 col-sm-6">
                <input type="email" className="form-control" placeholder="Your Email" name="email" onChange={handleChange}/>
              </div>
              <div className="col-12 col-sm-6">
              <p> &nbsp; upload resume</p>
              </div>
              <div className="col-12 col-sm-6">
                <input type="file" className="form-control bg-white" name="resume" onChange={handleChange}/>
              </div>
              <div className="col-12">
                <textarea className="form-control" rows={5} placeholder="Coverletter" defaultValue={""} name="coverletter" onChange={handleChange}/>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100" type="submit" onClick={handleSubmit}>Apply Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  </div>
</div>



    );
}
 
export default Jobdetail;