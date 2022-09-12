import { useRef } from "react";
import { useState } from "react";

// püstised kriipsud ||      <>|   < - lihtsalt vajutus     > - shift+<     | - alt gr+<

function Seaded() {                   // getItem tähistab viimast setItem panekut
  const [keel, muudaKeel] = useState(localStorage.getItem("veebilehe_keel") || "est");
  const telRef = useRef();
  const emailRef = useRef();

  const muudaKeelEst = () => {
    muudaKeel("est"); // muudab HTMLi
    localStorage.setItem("veebilehe_keel", "est"); // salvestab
  }

  const muudaKeelEng = () => {
    muudaKeel("eng");
    localStorage.setItem("veebilehe_keel", "eng");
  }

  const muudaKeelRus = () => {
    muudaKeel("rus");
    localStorage.setItem("veebilehe_keel", "rus");
  }

  const sisestaTel = () => {
    localStorage.setItem("tel", telRef.current.value);
  }

  const sisestaEmail = () => {
    localStorage.setItem("email", emailRef.current.value);
  }

  return ( 
    <div>
        <label>Meie telefoninumber </label>
        <input ref={telRef} type="text" />
        <button onClick={sisestaTel}>Sisesta</button>
        <br />
        <label>Meie email </label>
        <input ref={emailRef} type="text" />
        <button onClick={sisestaEmail}>Sisesta</button>
        <br />


        <button onClick={muudaKeelEst}>est</button>
        <button onClick={muudaKeelEng}>eng</button>
        <button onClick={muudaKeelRus}>rus</button>
        { keel === "est" && <div>Leht on eesti keelne</div> }
        { keel === "eng" && <div>Leht on inglise keelne</div> }
        { keel === "rus" && <div>Leht on vene keelne</div> }
    </div> );
}

export default Seaded;