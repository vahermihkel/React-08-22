import { useRef } from "react";
import { useState } from "react"; // 'useState' is not defined

// ffc
function LisaToode() {
  const [s6num, uuendaS6num] = useState("Lisa uus toode!");    // semikoolon tähistab rea lõppu
  const nimiRef = useRef();

  const lisa = () => {
    if (nimiRef.current.value === "") {
      uuendaS6num("Nime sisestusväli ei saa olla tühi!");
    } else {
      uuendaS6num("Toode lisatud!");
    }
    
  } 
  // 'import' and 'export' may only appear at the top level.

  // function lisa() {

  // }

  return ( 
    <div>
      {/* 'sonum' is not defined */}
      <div>{s6num}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
                {/* () => lisa() */}
                {/* 'lisa' is not defined */}
      <button onClick={lisa}>Sisesta</button> <br />
    </div> );
}

export default LisaToode;