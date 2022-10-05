import { useRef } from "react";
import { useState } from "react"; // 'useState' is not defined

function LisaToode() {
  const [s6num, uuendaS6num] = useState("Lisa uus toode!");    // semikoolon tähistab rea lõppu
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();

  const lisa = () => {
    if (nimiRef.current.value === "") {
      uuendaS6num("Nime sisestusväli ei saa olla tühi!");
    } else {
      uuendaS6num("Toode lisatud!");
      let tootedLS = localStorage.getItem("tooted");
      tootedLS = JSON.parse(tootedLS) || [];
      const uusToode = {
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value),
        "pilt": piltRef.current.value
      }
      tootedLS.push(uusToode);
      tootedLS = JSON.stringify(tootedLS);
      localStorage.setItem("tooted", tootedLS);
    }
    
  } 

  return ( 
    <div>
      <div>{s6num}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div> );
}

export default LisaToode;

/* () => lisa() */
/* 'lisa' is not defined  - kui pole funktsiooni olemas*/

/* 'sonum' is not defined - kui pole useState muutujat olemas */


// 1. võta kõik vanad väärtused localStorage-st ---> localStorage.getItem("VÕTI")
// 2. VÕTAME LOCALSTORAGE-st SAADUD VÄÄRTUSEST JUTUMÄRGID MAHA ---> JSON.parse()
// 3. lisa 1 juurde ---> .push(üksJuurde);
// 4. PANEME UUELE ARRAY-le JUTUMÄRGID PEALE ---> JSON.stringify()
// 5. pane tagasi localStorage-sse ---> localStorage.setItem("VÕTI", uusVäärtus)