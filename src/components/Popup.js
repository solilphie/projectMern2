import React from 'react'
import './Popup.css'
import axiosInstance from '../axios';

var fileDownload = require('js-file-download');

function Popup(props) {
    const application = props.app;

    const handlePDFDownload = (filename) => {
        console.log(filename)
        const payload = {
            filePath: filename
          };
        axiosInstance.post('admin/DownloadPDF/', payload, { 
            responseType: 'blob',
        }).then(res => {
            fileDownload(res.data, filename);
            console.log(res);
        }).catch(err => {
            console.log(err);
        })}

    return (props.trigger) ? (

        <div className="popup">
            <div className="popup-inner" >
                <button className="close-btn"  onClick={() => props.setTrigger(false)}>X</button>
                <table style={{width:"90%"}}>
        <tr>
            <th ><h4 className='firstcolumn' >name</h4></th>
            <th ><h4 className='secondcolumn'>{application.name}</h4></th>
        </tr>
        <tr>
            <th ><h4 className='firstcolumn'>email</h4></th>
            <th ><h4 className='secondcolumn'>{application.email}</h4></th>
        </tr>
        <tr>
            <th ><h4 className='firstcolumn'>cover letter</h4></th>
            <th ><h4 className='secondcolumn'>{application.coverletter}</h4></th>        
        </tr>
        </table>
            <button onClick={() => handlePDFDownload(application.resume)} style={{textAlign:"center", marginTop:"12px"}}>
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                Download Resume!
                </span>
            </button>
        
        
                  
                { props.children }
            </div>
        </div>
    ): "";
}
export default Popup