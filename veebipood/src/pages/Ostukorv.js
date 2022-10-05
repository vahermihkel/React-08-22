import { useState } from "react";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);
// useState()   <--- sulgude sees panen esialgse väärtuse mida lehel näen (pärast refreshi või lehele tulles)
//         []   <--- tähistavad et alguses on väärtuseks array ["cats","dogs","chicken","cows"]
// useState([])

  const kustuta = (index) => {
    ostukorv.splice(index,1);
    uuendaOstukorv(ostukorv.slice()); // HTML-s
    // ostukorv = JSON.stringify(ostukorv); Line 12:5:  'ostukorv' is constant  no-const-assign
                                    // "["adasdas","adasdas","adasdas"]"
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv)); // LocalStorage-s
                                      // "ostukorv"
   // localStorage.setItem("ostukorv", "ostukorv"); // LocalStorage-s


    // uuendaOstukorv() // <--- sulgude sees panen uue väärtuse mida lehel näen
    // sulud tähistavad, et see funktsioon pannakse käima
  }

  const tyhjenda = () => {
    uuendaOstukorv([]);               // "[]"
    localStorage.setItem("ostukorv", JSON.stringify([])); 
    // localStorage.setItem("ostukorv", "[]"); 
  }

// 1. võta kõik vanad väärtused localStorage-st ---> localStorage.getItem("VÕTI")
// 2. VÕTAME LOCALSTORAGE-st SAADUD VÄÄRTUSEST JUTUMÄRGID MAHA ---> JSON.parse()
// 3. lisa 1 juurde ---> .push(üksJuurde);
// 4. PANEME UUELE ARRAY-le JUTUMÄRGID PEALE ---> JSON.stringify()
// 5. pane tagasi localStorage-sse ---> localStorage.setItem("VÕTI", uusVäärtus)

  const arvutaOstukorviKogusumma = () => {
    let kogusumma = 0;
    // [{nimi: "Hernes", hind: 6},{nimi: "Kohupiim", hind: 2}, {nimi: "Fanta", hind: 3}]
    //      {nimi: "Hernes", hind: 6} =>   6  =  0  +  6
    //      {nimi: "Kohupiim", hind: 2} =>   8  =  6  + 2
    //      {nimi: "Fanta", hind: 3} =>  11    =   8  +  3
    ostukorv.forEach(element => kogusumma = kogusumma + element.hind );
    return kogusumma.toFixed(2); // HTMLi
  }

  return ( 
    <div>
     { ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div> }
     { ostukorv.length === 0 && <div>Ostukorv on tühi</div> }
     { ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button> }
      {ostukorv.map((element,index) => 
        <div key={index}> 
          <img src={element.pilt} alt="" />    
          <div>{element.nimi}</div>      
          <div>{element.hind} €</div>  
          <button onClick={() => kustuta(index)}>x</button> 
        </div>)}
      <div>Kokku: {arvutaOstukorviKogusumma()} €</div>
    </div> );
}

export default Ostukorv;