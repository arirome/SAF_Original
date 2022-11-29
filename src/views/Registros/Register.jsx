import React, { useEffect, useState } from "react";
import "../../styles/StyleForm.css";
import { useForm } from "../../components/hooks/useForm";
import { connect } from "react-redux";
import Select from "react-select";
import { fetchRegistroUsuario, clearRegistro} from "../../redux/actions/registro";

import Sidebar from "../../components/navbars/Navhorizontal";

const Registro = ({ fetchRegistroUsuario}) => {
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    correo: "",
    password: "",
    nombre: "",
    rol: "",
  });





  let { correo, password, nombre, rol } = formRegisterValues;



  const handleRegister = (e) => {
    e.preventDefault();
    
    if (fetchRegistroUsuario(correo, password, nombre, rol)) {
      
      
    }
    
   
   
  
    //setRefresh(true)
    console.log(nombre, rol);
  };

  return (
    <>



<div className="home">
     
     <Sidebar />
     <div className="homeContainer">
       
     <div class="wrapper2 ">
      <div id="formContent">
      
        <h2 class="active"> Registrar Usuario </h2>

        <form onSubmit= {handleRegister }>
       
          <input
            type="text"
            className="form-control"
            placeholder="Correo"
            name="correo"
            value={correo}
            onChange={handleRegisterInputChange}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={handleRegisterInputChange}
          />

          <input
            type="text"
            className="form-control"
            placeholder="nombre"
            name="nombre"
            value={nombre}
            onChange={handleRegisterInputChange}
          />

          <select
            class="form-select form-select mx-4 mb-5"
            aria-label="Default select example"
            style={{ width: "400px", top: "10px", position: "relative" }}
            name="rol"
            onChange={handleRegisterInputChange}
          >
            <option>Selecciona un rol</option>
            <option value="admin">admin</option>
            <option value="productor">productor</option>
            <option value="inventario">inventario</option>
            <option value="cajero">cajero</option>
          </select>

          <input type="submit" class="fadeIn fourth" value="Enviar" />

          {/* <button class="btn btn-primary btn-left me-md-2" > Enviar</button> */}
        </form>
      </div>
    </div>
      
     </div>
   </div>
   
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.registro.data,

});

//{login} LO PASAMOS ARRIBA
//connect ES EL QUE SE ENCARGA DE CONECTAR LAS ACCIONES CON EL COMPONENTE
export default connect(mapStateToProps, { fetchRegistroUsuario,clearRegistro })(Registro);
