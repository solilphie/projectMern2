import { useState ,useEffect} from "react";
import React from 'react';
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
import './create.css'


const Create = () => {
  const [userId, setUserId] = useState({userIdd:null});
  useEffect(() => {
    axiosInstance.get('getuser/').then((res) => {
      const iduser = res.data[0];
      setUserId({ userIdd : iduser });
      console.log("res" ,userId.userIdd);
    });
  }, [setUserId]);  
    
    function slugify(string) {
		const a =
			'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
		const b =
			'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
		const p = new RegExp(a.split('').join('|'), 'g');

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
			.replace(/&/g, '-and-') // Replace & with 'and'
			.replace(/[^\w\-]+/g, '') // Remove all non-word characters
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	}

	const history = useNavigate();
	const initialFormData = Object.freeze({
    company:"",
		title: '',
		slug: '',
    category:'',
		excerpt: '',
		content: '',
    //status:'published',
	});
    const [formData, updateFormData] = useState(initialFormData);
    const handleChange = (e) => {
		if ([e.target.name] == 'title') {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
				['slug']: slugify(e.target.value.trim()),
			});
		} else {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post('admin/create/', {
        company: formData.company,
				title: formData.title,
				slug: formData.slug,
				author: userId.userIdd.id,
        category:formData.category,
				excerpt: formData.excerpt,
				content: formData.content,
        //status: formData.status,
			})
			.then((res) => {
				history('/employer');
        window.location.reload()
			});
	};

    return ( 
        <>
			<div className="page-wrapper bg-wight p-t-100 p-b-50">
  <div className="wrapper wrapper--w900">
    <div className="card card-6">
      <div className="card-heading">
        <h2 className="title">Add new job</h2>
      </div>
      <div className="card-body">
        <form method="POST">
          <div className="form-row">
            <div className="name">Company name</div>
            <div className="value">
              <input className="input--style-6" type="text" placeholder="Company name" id="company" name="company" onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="name">Job title</div>
            <div className="value">
              <div className="input-group">
                <input className="input--style-6" type="email" placeholder="Job title/Position name" id="title" name="title" onChange={handleChange}/>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="name">category</div>
            <div className="value">
              <div className="input-group">
                <textarea className="textarea--style-6" placeholder="Domains " defaultValue={""} id="category" name="category" onChange={handleChange}/>
            </div>
            </div>
          </div>
          <div className="form-row">
            <div className="name">Exerpt</div>
            <div className="value">
              <div className="input-group">
                <textarea className="textarea--style-6" placeholder="keywords for your job description" defaultValue={""} id="excerpt" name="excerpt" onChange={handleChange}/>
              </div>
            </div>
          </div>
		  <div className="form-row">
            <div className="name">Job description</div>
            <div className="value">
              <div className="input-group">
                <textarea className="textarea--style-6" placeholder="Job description" defaultValue={""} id="content" name="content" onChange={handleChange} />
              </div>
            </div>
          </div>
          
		  
		  {/*
		  <div className="form-row">
            <div className="name">Upload CV</div>
            <div className="value">
              <div className="input-group js-input-file">
                <input className="input-file" type="file" name="file_cv" id="file" />
                <label className="label--file" htmlFor="file">Choose file</label>
                <span className="input-file__info">No file chosen</span>
              </div>
              <div className="label--desc">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div>
            </div>
		</div>*/}


      </form>
      </div>
      <div className="card-footer">
        <button className="btn btn--radius-2 btn--blue-2" type="submit"  onClick={handleSubmit}>Post job</button>
      </div>
    </div>
  </div>
</div>









		{/*
                    
                <h6 >Status: </h6>
                <div >
                    <input  type="radio" 
                      value="published" id="status" name="status" onChange={handleChange}/>
                    <label >published</label>
                  </div>
                <div >
                    <input  type="radio" 
                      value="draft" id="status" name="status" onChange={handleChange} />
                    <label >draft</label>
                </div>
                
    			*/}
    </>
     );
}
 
export default Create;