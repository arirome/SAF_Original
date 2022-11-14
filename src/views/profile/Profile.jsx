import "./single.scss";

import Sidebar from "../../components/navbars/Navhorizontal";

import axios from "axios";

import Spinner from "../../layout/Spinner";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



const Profile = () => {


    const [publicacion, setPublicacion] = useState();

    const { id } = useParams();

    useEffect(() => {
        const cargarPublicaciones = async () => {
            const resp = await axios.get( `https://node-saf-api.onrender.com/api/v1/usuarios/${id}`);
            
            if (resp.ok) {
                setPublicacion(resp.publicacion);
            };
           
        };
        cargarPublicaciones();
    }, [id]);

    console.log(publicacion)


  return (
    <>



        <>
           <div className="single ">
      <Sidebar />
      <div className="singleContainer  ">
        <div className="top">
          <div className="left card border-info ">

         
            <div className="item ">
              <img
                src="src\assets\img\chem.jpg"
                alt=""
                className="itemImg"
              />
           
            
            <div className="details ">
                <h1 className="itemTitle">JANE</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
                <button
                                    type="button"
                                    class="btn btn-outline-warning mx-3"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-outline-danger"
                                  >
                                    Delete
                                  </button>


                                  
              </div>
              
             
            </div>
           
          </div>
         
        </div>
        
      </div>
      
    </div>
    
  
        </>



    </>
  );
};


export default Profile;