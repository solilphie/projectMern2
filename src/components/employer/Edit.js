import { useState , useEffect} from "react";
import axiosInstance from '../../axios';
import { useNavigate, useParams } from "react-router-dom";

export default function Edit () {
    const history = useNavigate();
    const { id } = useParams();

    const initialFormData = Object.freeze({
    company:'',
    title: '',
    slug: '',
    excerpt: '',
    category:'',
    content: '',
    status:'',
    });

    const [formData, updateFormData] = useState(initialFormData);

    useEffect(() => {
		axiosInstance.get('admin/edit/postdetail/' + id).then((res) => {
			updateFormData({
				...formData,
        ['company']: res.data.company,
				['title']: res.data.title,
				['excerpt']: res.data.excerpt,
        ['category']:res.data.category,
        ['slug']: res.data.slug,
				['content']: res.data.content,
        ['status']: res.data.status,
			});
			console.log(res.data);
		});
	}, [updateFormData]);

    const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance.put('admin/edit/' + id +'/', {
      company: formData.company,
			title: formData.title,
			slug: formData.slug,
			
			excerpt: formData.excerpt,
      category:formData.category,
			content: formData.content,
            status: formData.status,
		});
		history('/employer');
		window.location.reload();
	};

    return(<>
			<div className="page-wrapper bg-white p-t-100 p-b-50" >
  <div className="wrapper wrapper--w900">
    <div className="card card-6">
      <div className="card-heading">
        <h2 className="title">edit  job</h2>
      </div>
      <div className="card-body">
        <form method="POST">
          <div className="form-row">
            <div className="name">Company name</div>
            <div className="value">
              <input className="input--style-6" type="text" placeholder="Company name" id="company" name="company" value={formData.company} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="name">Job title</div>
            <div className="value">
              <div className="input-group">
                <input className="input--style-6" type="email" placeholder="Job title/Position name" id="title" name="title"  value={formData.title} onChange={handleChange}/>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="name">category</div>
            <div className="value">
              <div className="input-group">
                <textarea className="textarea--style-6" placeholder="Domains " defaultValue={""} id="category" name="category" value={formData.category} onChange={handleChange}/>
            </div>
            </div>
          </div>
          <div className="form-row">
            <div className="name">Exerpt</div>
            <div className="value">
              <div className="input-group">
                <textarea className="textarea--style-6" placeholder="keywords for your job description" defaultValue={""} id="excerpt" name="excerpt" value={formData.excerpt} onChange={handleChange}/>
              </div>
            </div>
          </div>
		  <div className="form-row">
            <div className="name">Job description</div>
            <div className="value">
              <div className="input-group">
                <textarea className="textarea--style-6" placeholder="Job description" defaultValue={""} id="content" name="content" value={formData.content}  onChange={handleChange} />
              </div>
            </div>
          </div>
          
         
		  
		  


      </form>
      </div>
      <div className="card-footer">
        <button className="btn btn--radius-2 btn--blue-2" type="submit"  onClick={handleSubmit}>update post</button>
      </div>
    </div>
  </div>
</div>

    </>
     );
}
      

