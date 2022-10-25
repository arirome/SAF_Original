
import { 
  FETCH_USUARIO_REQUEST,
  FETCH_USUARIO_SUCCESS,
  FETCH_USUARIO_ERROR,
  
  
} from "../tipos/types";



const INITIAL_STATE = {
  loading:false,
  data:[],
  error:'',
  
  
};

 

export default function(state = INITIAL_STATE, action){

  switch (action.type) {
    case FETCH_USUARIO_REQUEST:
      return {
        ...state,
        loading:true

      };
      case FETCH_USUARIO_ERROR:
        return {
          loading:false,
          data:[],
          error:action.payload
        };
      case FETCH_USUARIO_SUCCESS:
      return {
        
        loading:false,
        data:action.payload,
        error:'',
        
      };
    


    default:
      return state;
  }
};

