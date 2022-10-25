import React from 'react'
import { 

    BrowserRouter as Router,
    Routes,
    Route,
 }  from "react-router-dom";

import Home from '../views/home/Home';
import Info from '../views/informacion/Info';
import Login from '../views/login/Login'; 
import Panel from '../views/panel/Panel';
import List from "../views/tabla/List";



export default function Rutas  ()  {
  return (
  
    <Router>
      
        <Routes>
          <Route exact path="/Informacion" element={<Info/>}/>
          <Route exact path="/Panel" element={<Panel/>}/>
          <Route exact path="/Iniciosesion" element={<Login/>}/> 
          <Route exact path="/" element={<Home/>}/>
          
          <Route path="users">
              <Route index element={<List />} />
              {/* <Route path=":userId" element={<Single />} /> */}
              
            </Route>

          <Route path="/products">
              <Route index element={<List />} />
             {/*  <Route path=":productId" element={<Single />} /> */}
              
            </Route>

        </Routes>
     
    </Router>
  

  )
}

