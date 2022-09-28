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
      // Uncaught TypeError: Assignment to constant variable.
      // Line 16:7:  'tootedLS' is constant  no-const-assign
      let tootedLS = localStorage.getItem("tooted");
      console.log(tootedLS);
      // 1. "["Coca", "Fanta"]"           2. null
      tootedLS = JSON.parse(tootedLS) || [];
      console.log(tootedLS);
      // 1.  ["Coca", "Fanta"]            2. []
      //Uncaught TypeError: Cannot read properties of null (reading 'push')
      //tootedLS.push is not a function ---> mul EI OLE tegemist array'ga
      tootedLS.push(nimiRef.current.value);
      console.log(tootedLS);
      // 1. ["Coca", "Fanta", "Sprite"]   2. ["Sprite"]
      tootedLS = JSON.stringify(tootedLS);
      console.log(tootedLS);
      // 1."["Coca", "Fanta", "Sprite"]"  2."["Sprite"]"
      localStorage.setItem("tooted", tootedLS);
    }
    
  } 

// 1. võta kõik vanad väärtused localStorage-st ---> localStorage.getItem("VÕTI")
// 2. VÕTAME LOCALSTORAGE-st SAADUD VÄÄRTUSEST JUTUMÄRGID MAHA ---> JSON.parse()
// 3. lisa 1 juurde ---> .push(üksJuurde);
// 4. PANEME UUELE ARRAY-le JUTUMÄRGID PEALE ---> JSON.stringify()
// 5. pane tagasi localStorage-sse ---> localStorage.setItem("VÕTI", uusVäärtus)

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