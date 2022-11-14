import { combineReducers } from "redux";



import  buscadorUsuario  from './login';
import  registro  from './registro';
import usuario from "./usuarios";
import productos from "./productos";
import categoria from "./verCategorias";
import producto from "./verProductos";
import punto from "./verPuntos";
import profile from "./VerProfile";


export default combineReducers({
    buscadorUsuario,
    registro,
    usuario,
    productos,
    categoria,
    producto,
    punto,
    profile
    

})
