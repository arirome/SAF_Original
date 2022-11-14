import "./list.scss";

import Sidebar from "../../components/navbars/Navhorizontal";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { Button, Title, TextInput, Modal } from "@mantine/core";

import { Link } from "react-router-dom";

import { connect, useSelector } from "react-redux";
//import verUsuarios from "../../redux/actions/usuarios";
import { useEffect, useState } from "react";
import Spinner from "../../layout/Spinner";

import { verUsuarios} from "../../redux/actions/usuarios";

import Register from "../Registros/Register";

const List = ({verUsuarios, usuario: { usuarios: { usuarios },loading,}}) => {

  useEffect(() => {

    verUsuarios()
    
   
  }, []); 

  console.log( usuarios );
  

  return (
    <>
      {!loading ? (
        <>
          <div className="list">
            <Sidebar />
            <div className="listContainer">
              <div className="datatable">
                <div className="datatableTitle">
                  <br />
                  <h1 style={{ textAlign: "center" }}>USUARIOS</h1>
                  <hr style={{ color: "black" }}></hr>

                  <div className="container mt-5">

                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link  type="button" className="btn btn-primary btn-left me-md-2" to="/RegisterUsuario">Registrar usuario</Link>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <h1 style={{ textAlign: "center" }}>TABLA USUARIOS</h1>
                    <hr style={{ color: "black" }}></hr>

                    <MDBTable align="middle" bordered borderColor="info">
                      <MDBTableHead>
                        <tr>
                          <th scope="col">Nombre</th>
                          <th scope="col">Email</th>
                          <th scope="col">Rol</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {
                          usuarios.map((usuario) => (
                            <tr>

                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="ms-3">
                                    <p className="fw-bold mb-1">
                                      {usuario.nombre}
                                    </p>
                                    <p className="text-muted mb-0"></p>
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="ms-3">
                                    <p className="fw-bold mb-1">
                                      {usuario.correo}
                                    </p>
                                    <p className="text-muted mb-0"></p>
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="ms-3">
                                    <p className="fw-bold mb-1">
                                      {usuario.rol}
                                    </p>
                                    <p className="text-muted mb-0"></p>
                                  </div>
                                </div>
                              </td>
                             

                              <td>
                                <MDBBtn color="link" rounded size="sm">
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
                                </MDBBtn>
                              </td>
                            </tr>
                          ))
                        }
                      </MDBTableBody>
                    </MDBTable>

                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  usuario: state.usuario,

});

export default connect(mapStateToProps, { verUsuarios })(List);
