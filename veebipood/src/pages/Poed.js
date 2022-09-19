
// array         tel: "51312"    email: "ads@fasd.com"     sõnum: "Lisa toode"
// array - list - massiiv
//     ["Mustamäe", "Kristiine", "Lasnamäe", "Põhja-Tallinn", "Kesklinn"] 

import { useState } from "react";

//      /poed   
function Poed() {
  // muutuja, mille väärtuseks on array (väärtuste kogumik), iga element on eristatud komaga
  //                                    0           1           2           3           4               5
  const [poed, uuendaPoed] = useState(["Mustamäe", "Õismäe", "Kristiine", "Lasnamäe", "Põhja-Tallinn", "Kesklinn"]);

  const sorteeri = () => {
    poed.sort(); // JavaScripti sissekirjutatud funktsionaalsus -> sorteeri A-Z
    uuendaPoed(poed.slice());  // mälukoha ära lõikamine - tekitab koopia
  }

  // tumesinine - HTML-s on tag - <div>, <button>, <img> jne, JS-s definitsioonid: function, const, =>
  // kollane - funktsioon ja tal on enamustel juhtudel sulud lõpus    .startsWith("+372")   .sort()
  // tavaline sinine - meie tehtud const muutuja
  // helesinine - HTMLs on tag-i atribuut, className="", alt="", onClick="", src="", 
  //                          JS-s: muutujad, kus pole const ees
  // punane/oranž - sõnaline väärtus
  // valge - HTMLs väljakuvamine

  // [] - kandilised sulud - array jaoks, useState loomise jaoks
  // {} - koodiblokk JS-s, HTMLs JavaSripti tegemist
  // () - funktsiooni sulud
  // () => {} - funktsiooni loomine
  // && - kui vasakul pool on tõsi, siis näita paremat
  // || - kui vasakul pool on tühjus, siis võta parem
  // === - vasak pool võrdub parema poolega
  // ;   - rea lõpetamiseks (pole kohustuslik)
  // ,   - array sees elementide eristamiseks
  // .   - kutsun selle muutuja funktsionaalsuse välja 
  // =   - annan muutujale väärtust

  const kustuta = (j2rjekorraNumber) => {
    poed.splice(j2rjekorraNumber,1);  // splice ---> kustutab, pean mainima mitmendat ja mitu tükki 
    uuendaPoed(poed.slice());
  }

  return ( 
    <div>
      <button onClick={sorteeri}>Sorteeri A-Z</button>
      {/* .map() on array-de kuvamiseks HTMLs, siis teen selle funktsionaalsuse, mis on sisus tsükkel
      tehakse noole paremat poolt nii mitu korda kui mitu komaga eristatud elementi mul on */}
      {poed.map((pood,index) => <div key={pood}>{pood} <button onClick={() => kustuta(index)}>x</button></div>)} 
      {/* {idd.map((id,index) => <div key={id}>{id} <button onClick={() => kustuta(index)}>x</button></div>)}  */}

      {/* <div>Mustamäe <button>x</button></div>
      <div>Õismäe <button>x</button></div>
      <div>Kristiine <button>x</button></div>
      <div>Lasnamäe <button>x</button></div>
      <div>Põhja-Tallinn <button>x</button></div>
      <div>Kesklinn <button>x</button></div> */}
    </div> );
}

// .map is not a function <---- see tähendab, et .map ees ei ole [] väärtust

export default Poed;