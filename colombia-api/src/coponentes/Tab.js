import Presidentes from '../Apis/api_presidentes'
import './Tab.css'
import React, { useState } from 'react';
import imagen from '../Img/procesando.png'; 



const Tab = () => {
  const [chose, setChose] = useState(1); // Estado para rastrear la opción seleccionada

  const handleOptionClick = (option) => {
    setChose(option);
  };

  return (
    <div className="tab-container">
      <ul className="options">
        <li
          id="opcion1"
          className={`option ${chose === 1 ? 'option-active' : ''}`}
          onClick={() => handleOptionClick(1)}
        >
          Presidentes por partido
        </li>
        <li
          id="opcion2"
          className={`option ${chose === 2 ? 'option-active' : ''}`}
          onClick={() => handleOptionClick(2)}
        >
          Aeropuertos
        </li>
        <li
          id="opcion3"
          className={`option ${chose === 3 ? 'option-active' : ''}`}
          onClick={() => handleOptionClick(3)}
        >
          Atracciones
        </li>
      </ul>
      <div className="contents">
        <div id="content1" className={`content ${chose === 1 ? 'content-active' : ''}`}>
          <main id='contenido'>
            <Presidentes />
          </main>
        </div>
        <div id="content2" className={`content ${chose === 2 ? 'content-active' : ''}`}>
          <main>
          <img src={imagen} alt="Descripción de la imagen" className="imagen" />
          </main>
        </div>
        <div id="content3" className={`content ${chose === 3 ? 'content-active' : ''}`}>
          <main>
          <img src={imagen} alt="Descripción de la imagen" className="imagen" />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Tab;
