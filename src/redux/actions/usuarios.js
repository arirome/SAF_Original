import axios from "axios";

import { VER_USUARIOS_SUCCESS} from "../tipos/types";

import { fetchConToken } from "../../helpers/fetch";

export const VerUsuarioSuccess = (res) => {
  return {
    type: VER_USUARIOS_SUCCESS,
    payload: res,
  };
};


//get all profiles
export const verUsuarios = () => async (dispatch) => {



  const resp = await axios.get(
    "https://node-saf-api.onrender.com/api/v1/usuarios/?desde=0&limite=20"
  );


    dispatch(VerUsuarioSuccess(resp.data));

 
  

    console.log("hola");
    console.log(resp);
  

};





export default verUsuarios

