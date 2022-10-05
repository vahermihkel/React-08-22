import { Link } from "react-router-dom";

function Koduleht() {
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];

  const lisaOstukorvi = (klikitudToode) => {
    let ostukorvLS = localStorage.getItem("ostukorv");
    ostukorvLS = JSON.parse(ostukorvLS) || [];
    ostukorvLS.push(klikitudToode);
    ostukorvLS = JSON.stringify(ostukorvLS);
    localStorage.setItem("ostukorv", ostukorvLS);
  }

  return ( 
    <div>
      {tooted.map((element,index) => 
        <div key={element.nimi}>
          <Link to={"/toode/" + index}>
            <img src={element.pilt} alt="" />    
            <div>{element.nimi}</div>      
            <div>{element.hind} €</div>   
          </Link>
          <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
        </div>)}
    </div> );
}

export default Koduleht;