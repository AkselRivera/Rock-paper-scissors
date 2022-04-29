
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header/Header';
import Selection from './components/selection/Selection';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import ModalComponent from './components/modal/Modal';
import Result from './components/results/Result';
import Item from './components/items/Item';
import { ContextOption, option } from './context/ContextProvider';



function App() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ContextOption.Provider value={option}>

    <div className="App">
      {/* <header className="App-header">
        <img src={imagen2} className="App-logo" alt="logo" />
        
      </header> */}

      
        <Header/>

        {/* <Selection/> */}

        {/* <Item image={paper} color='(hsl(230, 89%, 62%) ,hsl(230, 89%, 65%))' /> */}
        

        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Selection/> } />
        <Route path="/result" element={<Result />} />
        
    </Routes>
  </BrowserRouter>

        {/*   <Result/> */}


        <Button variant="outline-light px-4" onClick={() => setModalShow(true)}>
          Rules
        </Button> 


        <ModalComponent
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
    </div>
  </ContextOption.Provider>
  );
}

export default App;
