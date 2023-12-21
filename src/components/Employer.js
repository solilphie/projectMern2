import { useState } from "react";
import {Link } from "react-router-dom";
import React from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom'
import { useEffect,useLocation} from "react";
import './Applicants.css';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//const element = <FontAwesomeIcon icon={faCoffee} />
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Employer = (props) => {

  const { id } = useParams();
  const [user, setUserId] = useState({userIdd:null});
  
    useEffect(() => {
    console.log("lallalalalla")
      axiosInstance.get("user/getuser").then((res) => {
        const user = res.data;
        console.log(res)
        setUserId({ userIdd : user});
        //console.log("resss" ,user.userIdd);
        
      
    });
  },[]);
  //console.log("result" ,user)
  const users = user.userIdd;
  const { posts } = props;
  console.log(user.userIdd)
    const [c , setC] = useState(1);
    if (!posts || posts.length === 0) return (



      <div className="container-xxl py-5" style={{marginTop:"50px"}}>
        <div className="container">
        {users&& 

      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
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
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Adress</p>
                          <h6 className="text-muted f-w-400">{users.adress}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">recent posted jobs </p>
                          <h6 className="text-muted f-w-400">0  jobs</h6>
                        </div>
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
      
      
          <h1 className="text-center mb-5 wow fadeInUp"  style={{fontSize:'30px',margin:'20px'}} >You don't have any posts</h1>
          <Link to={"/employer/create/"} ><h1 style={{fontSize:'20px',margin:'20px'}} >add job</h1> </Link>
          </div></div>);
    //console.log(posts)
    
    
    return ( 
<>



<div className="container-xxl py-5" style={{marginTop:"50px"}}>
  <div className="container">
  {users && 
<div className="page-content page-container" id="page-content" key={user.id}>
  <div className="padding">
    <div className="row container d-flex justify-content-center">
      <div className="col-xl-6 col-md-12">
        <div className="card user-card-full">
          <div className="row m-l-0 m-r-0">
            <div className="col-sm-4 bg-c-lite-green user-profile">
              <div className="card-block text-center text-white">
                <div className="m-b-25">
                  <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                </div>
                <h6 className="f-w-500" >Profile</h6>
                <h6 className="f-w-600" >{user.first_name} &nbsp;{ user.last_name}</h6>
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
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Adress</p>
                    <h6 className="text-muted f-w-400">{users.adress}</h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">recent posted jobs </p>
                    <h6 className="text-muted f-w-400">{posts.length}    jobs</h6>
                  </div>
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


    <h1 className="text-center mb-5 wow fadeInUp"  style={{fontSize:'30px',margin:'20px'}} >Your previous job offers</h1>
    <Link to={"/employer/create/"} ><h1 style={{fontSize:'20px',margin:'20px'}} >add job</h1> </Link>
    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          

        {posts.map((post) => {
          const jobid = post.id;
          console.log(post)
						return (
          
          
          
          <div className="job-item p-4 mb-4" key={post.id}>
            <div className="row g-4">
              <div className="col-sm-12 col-md-8 d-flex align-items-center">
                
                <div className="text-start ps-4">
                  <h5 className="mb-4" style={{fontSize:'25px'}}>{post.title.substr(0, 50)}...</h5>
                  
                  <div className="text-truncate me-3"style={{fontSize:'20px'}} id ='company'><FontAwesomeIcon icon="fa-solid fa-building" />&nbsp; &nbsp; {post.company}</div>
                  
                </div>
              </div>
              <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                <div className="d-flex mb-3">
                  
                  <Link to={"/employer/edit/"+post.id} state={{data : post}} style={{marginRight:'20px', color:'gray'}}><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></Link>
                  <Link to={"/employer/delete/"+post.id} state={{data : post}} style={{ color:'gray'}}><FontAwesomeIcon icon="fa-solid fa-trash-can" /></Link>
                  <Link to={"/applicants/"+post.id} state={{data : post}}><button className="btn btn-primary w-60" style={{marginLeft:"20px"}}>view applicants</button> </Link>
                </div>
                <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2" />{post.status}</small>
                <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2" />{post.published.substring(0, 10)}</small>
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
 
export default Employer;