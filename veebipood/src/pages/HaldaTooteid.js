import { useState } from "react";

function HaldaTooteid() {
  const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);

  const kustuta = (j2rjekorraNumber) => {
    tooted.splice(j2rjekorraNumber,1);
    uuendaTooted(tooted.slice());
    localStorage.setItem("tooted", JSON.stringify(tooted));
  }

  return ( 
    <div>
       {tooted.map((element,index) => 
        <div key={element}>
          <div>{element}</div>         
          <button onClick={() => kustuta(index)}>Kustuta</button>
          <button>Muuda</button>
        </div>)}
    </div> );
}

export default HaldaTooteid;