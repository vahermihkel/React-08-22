import { useParams } from "react-router-dom";

function YksikToode() {
  // <Route path="toode/:j2rjekorraNumber" element={ <YksikToode />}/>
  const { j2rjekorraNumber } = useParams();
  const tootedLS = JSON.parse(localStorage.getItem("tooted")) || [];
  const n2idatavToode = tootedLS[j2rjekorraNumber];
  console.log(n2idatavToode);

  return ( 
    <div>
      { n2idatavToode !== undefined && <div>{n2idatavToode}</div>}
      { n2idatavToode === undefined && <div>Valitud toodet ei leitud</div>}
    </div> );
}

export default YksikToode;