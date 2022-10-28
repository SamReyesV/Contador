import React from "react";
import "../Hojas-de-estilo/contador.css"

function Contador({ numDeClics }){
  return(
    <div className="contador">
      {numDeClics}
    </div>
  );  
}

export default Contador;