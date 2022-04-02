import './App.css'

import { NavbarManager } from './Components/NavbarManager'
import JsonData from "./data/data.json";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';



function App() {

  const [pageData, setPageData] = useState({});//pageData== vetor, setPageData == funcão para carregar o vetor
  useEffect(() => {
    setPageData(JsonData);
  }, []);
 
  return (
    <div>
      <NavbarManager/>
      <About  data={pageData.About} />
      <Contact  data={pageData.Contact} />



    </div>
    
    



   
  )
}

export default App
