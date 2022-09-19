import { useState } from "react";


function Meist() {
  const [tel, uuendaTel] = useState(localStorage.getItem("tel") || "Telefoninumbrit pole veel sisestatud");
  const email = localStorage.getItem("email") || "Emaili pole veel sisestatud";
  const [n2itaEmail, uuendaN2itaEmaili] = useState(false);

  return ( 
    <div>
      <div>Meie telefoninumber: {tel} 
        { tel.startsWith("+372") === false && localStorage.getItem("email") &&
          <button onClick={() => uuendaTel("+372" + tel)}>
            Lisa Eesti suunakood
          </button> }
      </div>
      <div>Meie e-mail: { n2itaEmail === true && email } 
                        { n2itaEmail === false && localStorage.getItem("email") === "" && email }
        { n2itaEmail === false && localStorage.getItem("email") &&
          <button onClick={() => uuendaN2itaEmaili(true)}>Näita e-maili</button> }
      </div>
    </div> );
}

export default Meist;