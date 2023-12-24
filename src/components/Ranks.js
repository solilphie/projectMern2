import {Link ,useLocation} from "react-router-dom";
import axiosInstance from '../axios';
import { useState ,useEffect} from "react";
import React from 'react';
import'./Ranks1.css';
import image from "./waiting2.png"
var fileDownload = require('js-file-download');

const Ranks = () => {
  

  const location = useLocation();
  const applications = location.state.data; //applications
  //console.log("list:" ,listt[0].jobid);
  const jobid = applications[0].jobid; //job id 
  //console.log("jobid:" ,jobid);
  const [mydata, setMydata] = useState({fdata:null,loading:true});
  useEffect(() => {
  fetch('http://127.0.0.1:8000/api/ml/ranks/'+jobid)
  .then((data) => data.json())
  .then((ranks) => {
    setMydata({ fdata : ranks, loading:false });
    //localStorage.setItem('results', JSON.stringify(ranks));
  });
}, [setMydata]
);

const handlePDFDownload = (filename) => {
  console.log(filename)
  axiosInstance.get(('download/'+filename), { 
      responseType: 'blob',
  }).then(res => {
      fileDownload(res.data, filename);
      console.log(res);
  }).catch(err => {
      console.log(err);
  })}

console.log("fdata",mydata.fdata)

    const r = 0;
    if (!mydata.loading) {
      const results = mydata.fdata;
      const indexes = results.index;
    return ( 
        
  <div  className="container px-6 mx-auto grid">
    <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Dashboard
    </h2>
  

    
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 py-3" style={{'width':'100px'}}>Rank</th>
            <th className="px-4 py-3"style={{'width':'100px'}}>Percentage</th>
              <th className="px-4 py-3">Applicant</th>
              <th className="px-4 py-3">email</th>
              <th className="px-4 py-3">resume</th>
              <th className="px-4 py-3">analysis</th>
            </tr>
          </thead>
          {indexes && indexes.map((i,rankvalue) => {
          
          const resumefile = applications[i].resume.substr(22,);
    return(
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800" key={applications[i].id}>
            <tr className="text-gray-700 dark:text-gray-400">

            <td className="px-4 py-3 text-sm">
                {rankvalue+1}
              </td>
            <td className="px-4 py-3 text-sm">
                {results.distance[i]}%
              </td>

              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">{applications[i].name}</p>
                    
                  </div>
                </div>
              </td>

              <td className="px-4 py-3 text-sm">
                {applications[i].email}
              </td>
              <td className="px-4 py-3 text-xs">
                <button onClick={() => handlePDFDownload(applications[i].resume.substr(22,).substring(14,))} >
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                Download Resume!
                </span> </button>
                
               
              </td>
              <td>
              <Link to={"/resumedetails/"+applications[i].id} state={{data : applications[i]}} ><button type="button" class="btn btn-primary">view details</button></Link>
              
              
              </td>
            </tr>
            
            
            
          </tbody>);})}
        </table>
    
      </div>
      
      
    </div>

    </div>

            
     );}
     return (<><center>
     <div>
			<p className="d" style={{ fontSize:"40px" , marginTop:"80px"}}>
				We are waiting for the data to load!...
			</p></div>
      <div>
        <img src={image} style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', position:'relative', top:'100px'}}/>
      </div></center></>
      
		);
}
 
export default Ranks;