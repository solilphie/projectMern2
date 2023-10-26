import { useState } from "react";
import "./Signup.css";
import image from "./signup-photo.jpeg"
import {Link } from "react-router-dom";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const navigate = useNavigate();
	const initialFormData = Object.freeze({
		first_name: '',
    last_name:'',
    adress:'',
    usertypes:'',
    categoryy:'',
    email: '',
		password: '',
	});


	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});};
    

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post('user/signup/', {
        first_name:formData.first_name,
        last_name:formData.last_name,
        adress:formData.adress,
        usertypes:formData.usertypes,
        categoryy:formData.categoryy,
        email:formData.email,
				password: formData.password,
			})
			.then((res) => {
				navigate('/log');
				//console.log(res);
				//console.log(res.data);
			});
	};

    return ( 
        
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src={image} alt="Sample photo" className="img-fluid" style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', position:'relative', top:'100px'}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase" style={{textAlign:'center'}}>Sign Up</h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                
                      <input type="text" id="first_name" name="first_name" className="form-control form-control-lg"  onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="last_name" name="last_name"className="form-control form-control-lg" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>
                
                <div className="form-outline mb-4">
                  <input type="text" id="adress" name="adress" onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example8">Address</label>
                </div>
                
                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                <h6 class="mb-0 me-4">Sign Up as: </h6>
                <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="usertypes" id="employer" onChange={handleChange}
                      value="employer" />
                    <label class="form-check-label" for="maleGender">Employer</label>
                  </div>
                <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" name="usertypes" id="employee" onChange={handleChange}
                      value="employee" />
                    <label class="form-check-label" for="otherGender">Employee</label>
                </div>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="categoryy" name="categoryy" onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example8">category</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="email" name="email" className="form-control form-control-lg" onChange={handleChange} />
                  <label className="form-label" htmlFor="form3Example90">email</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="password" name="password" className="form-control form-control-lg" onChange={handleChange}/>
                  <label className="form-label" >password</label>
                </div>
                
                <div className="d-flex justify-content-end pt-3">
                  <button type="reset" className="btn btn-light btn-lg" >Reset all</button>
                  <button   type="submit" className="btn btn-warning btn-lg ms-2" onClick={handleSubmit}>Sign Up</button>
                </div>
                <div>
                <p style={{ position:'relative', left:'275px'}}>Already signed up? <Link to="/log" >Log In</Link></p>
                </div>
              </div>
            </div>
          </div>
        
);}