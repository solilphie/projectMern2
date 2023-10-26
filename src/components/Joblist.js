import {Link } from "react-router-dom";
import "./Employee.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Joblist = (props) => {
    const { posts } = props;
    console.log('postss',posts)
    const [search,setSearch]=useState('');
    const handleChange=(e)=>{
      setSearch(e.target.value);
    };
    const filteredPosts= posts && posts.filter(
      (post)=>{return(
      post.title.toLowerCase().includes(search.toLowerCase())||
      post.excerpt.toLowerCase().includes(search.toLowerCase())||
      post.company.toLowerCase().includes(search.toLowerCase())
      );}
      
    )

    
    const [c , setC] = useState(1);
    if (!posts || posts.length === 0) return <p style={{marginTop:"100px"}}>Can not find any posts, sorry</p>;

    
    
   
   
    return ( 
      <>
   
   
<div className="container-xxl py-5" style={{marginTop:"50px"}}>
  <div className="container">
  <center><h1 style={{fontSize:'20px',margin:'20px'} } > jobs list </h1></center>
    <i className="fa fa-search" style={{ color: "black" }} />

    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
      
    <input type="text" className="form-control" placeholder="Search by job title ,company or key words  " style={{width:"400px",marginLeft:"30%",marginBottom:"5px "}} onChange={(e)=>handleChange(e)}/>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          

        {filteredPosts && filteredPosts.map((post) => {
          const jobid = post.id;
          //console.log(post)
						return (
          
          
          
          <div className="job-item p-4 mb-4" key={post.id}>
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


          
        </div>
      </div>
    </div>
  </div>
</div>
</>



     );
}
 
export default Joblist;
    
      