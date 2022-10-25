import "./list.scss"
import Sidebar from "../../components/navbars/Navhorizontal"


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      <div className="datatable">
      <div className="datatableTitle">
        Add New User
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}


<div className='container mt-5'>

<button type="button" class="btn btn-outline-primary">Primary</button>

        <div className='row'>
          
       
          <div>
           
          </div>
          

            <ul className='list-group'>
            <li className='list-group-item' >
            <span className='lead'>PRUEBA 1</span>


            <button className='btn btn-warning btn-sm float-right mx-3' >EDITAR</button>
            <button className='btn btn-danger btn-sm float-right' > ELIMINAR</button>
            </li>
            </ul>

        
        
        
        
        </div>
        
               </div>


      </div>
      
    </div>
        
      </div>
    </div>
  )
}

export default List