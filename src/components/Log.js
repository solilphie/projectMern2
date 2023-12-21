import { useState ,useEffect} from "react";
import {Link } from "react-router-dom";
import axiosInstance from '../axios';
import { useNavigate } from "react-router-dom";
import "./Log.css";

import loginphoto from "./login-photo.png"

    export default function Log() {
      const [iduser, setUserId] = useState({userIdd:null});
      const loginpath="";
      
      const navigate = useNavigate();
      const initialFormData = Object.freeze({
        email: '',
        password: '',
      });
      
      const [formData, updateFormData] = useState(initialFormData);
    
      const handleChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
        });
      };
    
      const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(formData);
    
        axiosInstance
          .post('user/login', {
            email: formData.email,
            password: formData.password,
          })
          .then((res) => {
            console.log(res)
            const id=res.data.user.id
            localStorage.setItem('access_token', res.data.token);
            // localStorage.setItem('refresh_token', res.data.refresh);
            axiosInstance.defaults.headers['Authorization'] =
              'JWT ' + localStorage.getItem('access_token');
            //navigate('/joblist');
            //console.log(res);
            //console.log(res.data);
            axiosInstance.get('user/getuser').then((res) => {
              const iduser = res.data
              setUserId({ userIdd : iduser });
              console.log("res" ,iduser);

              if (iduser.usertypes=="employer"){navigate('/employer')};
              if (iduser.usertypes=="employee"){navigate('/specialjoblist' )};
              
            });
          
          
          })
       


          //useEffect(() => {
          //  axiosInstance.get('getuser/').then((res) => {
          //    const iduser = res.data[0];
          //    setUserId({ userIdd : iduser });
          //    console.log("res" ,userId.userIdd);
          //  });
          //}, [setUserId]);
          //if (iduser.usertypes=="employer"){
          //  loginpath="/employer"
          //} else{
          //  loginpath="/joblist"
          //}
          
        }; 
      
    return ( 
        <section className="vh-100" style={{marginTop:"5%"}}>
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
    <h3 className="mb-5 text" style={{fontSize:'40px',textAlign:'center'}}>LogIn</h3>
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={loginphoto} className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="email" id="email" name="email" onChange={handleChange}  className="form-control form-control-lg" placeholder="Enter a valid email address" />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-3">
            <input type="password" id="password" name="password" onChange={handleChange}  className="form-control form-control-lg" placeholder="Enter password" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>
          
            
        <div className="text-center text-lg-start mt-4 pt-2">
          <Link to={loginpath}><button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit} style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button></Link>
          <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?</p> <Link to="/signup" className="link-danger">Register</Link>
        </div>
        </form>
      </div>
    </div>
  </div>
  
    
</section>

     );
}