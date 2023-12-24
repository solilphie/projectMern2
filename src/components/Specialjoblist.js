 import {Link } from "react-router-dom";
import "./Employee.css"
import { useState,useEffect } from "react";
import axiosInstance from '../axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Specialjoblist = () => {
    const [postsss, setPostsss] = useState({posts: null});
      useEffect(() => {
        axiosInstance.get('/admin/specialjoblist/').then((res) => {
          const postsss = res.data;
          setPostsss({ posts :postsss  });
          console.log("res" ,postsss.posts);});
        
      }, [setPostsss]);
      const postcategory=postsss.posts
      console.log('posts',postcategory)


    
    
    const [user, setUserId] = useState({userIdd:null});
    useEffect(() => {
		 axiosInstance.get('user/getuser').then((res) => {
            const user = res.data;
            setUserId({ userIdd : user });
        });
      
		},[setUserId]);
    console.log("resultttttt" , user);
    const users = user.userIdd;
    console.log("res" ,users);

    return ( 
      <>
   
   
<div className="container-xxl py-5" style={{marginTop:"50px"}}>
  <div className="container">
  {users && 
          
      
<div className="page-content page-container" id="page-content">
  <div className="padding">
    <div className="row container d-flex justify-content-center" >
      <div className="col-xl-6 col-md-12">
        <div className="card user-card-full">
          <div className="row m-l-0 m-r-0" >
            <div className="col-sm-4 bg-c-lite-green user-profile">
              <div className="card-block text-center text-white">
                <div className="m-b-25">
                  <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                </div>
                <h6 className="f-w-500" >Profile</h6>
                <h6 className="f-w-600" >{users.first_name} &nbsp;{ users.last_name}</h6>
                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
              </div>
            </div>
            <div className="col-sm-8">
              <div className="card-block">
                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Email</p>
                    <h6 className="text-muted f-w-400">{users.email}</h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Domain</p>
                    <h6 className="text-muted f-w-400">{users.categoryy}</h6>
                  </div>
                </div>
                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                <div className="row">
                  <center><div className="col-sm-6" >
                    <p className="m-b-10 f-w-600">Adress</p>
                    <h6 className="text-muted f-w-400">{users.adress}</h6>
                  </div></center>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
}
    <center><h1 style={{fontSize:'20px',margin:'20px'}} >Recommended Jobs for you </h1></center>
    <i className="fa fa-search" style={{ color: "black" }} />

    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
      
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          

        {postcategory && postcategory.map((post) => { 
          const jobid = post.id;
          //console.log(post)
						return (
          <div className="job-item p-4 mb-4"key={post.id} >
            <div className="row g-4">
              <div className="col-sm-12 col-md-8 d-flex align-items-center">
                
                <div className="text-start ps-4">
                  <h5 className="mb-3" style={{fontSize:'25px',margin:'20px'}}>{post.title}</h5>
                  <div className="text-truncate me-3" id ='company'><FontAwesomeIcon icon="fa-solid fa-building" />{post.company}</div>
                  
                </div>
              </div>
              <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                <div className="d-flex mb-3">
                  <a className="btn btn-light btn-square me-3" href><i className="far fa-heart text-primary" /></a>
                  <Link to="/Jobdetail"className="btn btn-primary" state={{data : post}}>Apply Now</Link>
                </div>
                <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2" />{post.published.substring(0, 10)}</small>
              </div>
            </div>
          </div>

            );})}


          <Link to='/Joblist'><button type="button" className="btn btn-primary py-3 px-5"   style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Browse More Jobs</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>
</>



     );
}
 
export default Specialjoblist;
    
      