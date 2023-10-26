import { useState , useEffect} from "react";
import axiosInstance from '../../axios';
import { useNavigate, useParams } from "react-router-dom";

export default function Delete () {
    const history = useNavigate();
    const { id } = useParams();
    const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.delete('admin/delete/' + id)
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			})
			.then(function () {
					history('/employer');
					window.location.reload();
			});
	};
    return(
        <button
					type="submit"
					onClick={handleSubmit}
                    style={{marginLeft:"600px", marginTop:"180px"}}
				>
					<h1>Press here to confirm delete</h1>
				</button>
    )


}