import {Link ,useLocation} from "react-router-dom";
import axiosInstance from '../axios';
import { useState ,useEffect} from "react";
import React, { PureComponent } from 'react';
import image from "./waiting2.png"
const ResumeDetails = () => {


    const location = useLocation();
    const application = location.state.data;
    console.log("application id",application.jobid);
    
    const [list, setList] = useState({flist:null,loading:true});
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/ml/resumedetails/'+application.id)
      .then((data) => data.json())
      .then((details) => {
        setList({ flist : details, loading:false });
        //console.log("list", list)
        //localStorage.setItem('features', JSON.stringify(details));
      });
      //console.log("sent jobid")
      
    }, [setList]
    );
    
    if (!list.loading) {
    //const ll = JSON.parse(localStorage.getItem('features'));
    //const featureslist = list;
    //const featureslist = JSON.parse(localStorage.getItem('features'));
    const featureslist = list.flist;
    console.log("featureslist", (featureslist));
    if(featureslist.length == 0){featureslist.soft[0]="no soft skills found."};
    if(featureslist.length == 0){featureslist.hard[0]="no hard skills found."};
    if(featureslist.length == 0){featureslist.intersec[0]="no matched skills found."};
    if(featureslist.degree == 3){featureslist.degree="Doctorate degree"};
    if(featureslist.degree == 1){featureslist.degree="Bachelor's degree"};
    if(featureslist.degree == 2){featureslist.degree="Masters degree"};
    const dist = featureslist.distance.toString()+"%";
    console.log( dist);

    return ( 
       <>    
         <section className="bg-light">
    <div className="container">
   
     <div className="row">    
       <div className="col-lg-12 mb-4 mb-sm-5">
         <div className="card card-style1 border-0">
           <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
             <div className="row align-items-center">
             <div className="progress-text" style={{marginTop:"20px",fontWeight:"bold",fontSize:'30px'}}>
                 <div className="row">
                   <div className="col-6" >Matching percentage </div>
                   <div className="col-6">{dist}</div>  
                 </div>
               </div>
             <div className="custom-progress progress progress-medium mb-3" style={{height: 4,marginTop:"8px"}}>
                 <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{width: "78.03%"}} aria-valuemax={100} aria-valuemin={0} aria-valuenow={10} role="progressbar" />
               </div>                        
               <div className="col-lg-6 px-xl-10" style={{marginLeft:"30px"}}>
                 <div style={{marginBottom:"20px",marginTop:"10px"}}>
                   <h3 className="text-primary" style={{fontSize:'35px',marginBottom:'10px'}}>Applicant Information:</h3>
                 </div>
                 <ul className="list-unstyled mb-1-9">
                 <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Name:</span> {application.name}</li>
                   <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Highest degree atteined: {featureslist.degree}</span></li>
                   <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Experience:</span>{featureslist.yearsexp}  years</li>
                   <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> {application.email}</li>                
                 </ul>               
               </div>
             </div>
           </div>
         </div>
       </div>    
       <div className="col-lg-12">
         <div className="row">
           <div className="col-lg-12 mb-4 mb-sm-5">
             <div className="mb-4 mb-sm-5">          
             <div style={{marginBottom:"20px",marginTop:"10px"}}>
                   <h3 className="text-primary" style={{fontSize:'35px',marginBottom:'10px'}}>Skills</h3>
                 </div>
 <div style={{display:"flex",width:{dist},flexDirection:'row',justifyContent:"center"}}>
               <div className="progress-text" style={{display:"inline-block" ,width:"30%"}}>
                 <div className="row">
                   <div className="col-6" style={{marginTop:"20px",fontWeight:"bold",fontSize:'17px'}}>Soft Skills: </div>
                   <div  style={{marginTop:"10px",fontSize:'15px' , marginLeft:"20px"}}>{ 
                   featureslist.soft.map(item => {
                     return <p>{item}</p>;
                   })}</div>
                 </div>
               </div>            
               <div className="progress-text" style={{display:"inline-block" ,width:"30%"}}>
                 <div className="row">
                   <div className="col-6" style={{marginTop:"20px",fontWeight:"bold",fontSize:'17px'}}>Hard skills: </div>
                   <div  style={{marginTop:"10px",fontSize:'15px', marginLeft:"20px"}}>{ 
                   featureslist.hard.map(item => {
                     return <p>{item}</p>;
                   })}</div>
                 </div>
               </div>            
               <div className="progress-text" style={{display:"inline-block" ,width:"30%"}}>
                 <div className="row">
                   <div className="col-6" style={{marginTop:"20px",fontWeight:"bold",fontSize:'17px'}}>Matched skills:</div>
                   <div  style={{marginTop:"10px",fontSize:'15px', marginLeft:"20px"}}>{ 
                   featureslist.intersec.map(item => {
                     return <p>{item}</p>;
                   })}</div>
                 </div>
               </div>
   </div>            
             </div>          
           </div>
         </div>
       </div>
     </div>  
     
   </div>
 </section>
 </>
 
        
     );}
     return (
      <><center>
      <div>
       <p className="d" style={{ fontSize:"40px" , marginTop:"80px"}}>
         We are waiting for the data to load!...
       </p></div>
       <div>
         <img src={image} style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', position:'relative', top:'100px'}}/>
       </div></center></>
		);
}
 
export default ResumeDetails;