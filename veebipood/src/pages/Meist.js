

function Meist() {
  const tel = localStorage.getItem("tel") || "Telefoninumbrit pole veel sisestatud";
  const email = localStorage.getItem("email") || "Emaili pole veel sisestatud";

  return ( 
    <div>
      <div>Meie telefoninumber: {tel}</div>
      <div>Meie e-mail: {email}</div>
    </div> );
}

export default Meist;