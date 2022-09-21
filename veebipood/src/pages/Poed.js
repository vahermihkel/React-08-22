
// array         tel: "51312"    email: "ads@fasd.com"     sõnum: "Lisa toode"
// array - list - massiiv
//     ["Mustamäe", "Kristiine", "Lasnamäe", "Põhja-Tallinn", "Kesklinn"] 

import { useRef } from "react";
import { useState } from "react";

import poedFailist from "../poed.json";

//      /poed   
function Poed() {
  // muutuja, mille väärtuseks on array (väärtuste kogumik), iga element on eristatud komaga
  //                                    0           1           2           3           4          5
  const [poed, uuendaPoed] = useState(poedFailist);
  const poodRef = useRef();

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

  const lisaPood = () => {
    poed.push(poodRef.current.value);    // animals.push("cows")     animals.push("chicken", "cats", "dogs")
    uuendaPoed(poed.slice()); // .slice() -- teeb koopia EHK kustutab esialgse mälukoha
  }
  // function lisaPood() {

  // }

  const tyhjenda = () => {
    uuendaPoed([]);
  }

  const filtreeri = () => {
    // poed.     <---- manipuleerima / muutma   // filtreerime sisse kõik kellel on lõpus "-mäe"
    const vastus = poed.filter(pood => pood.includes("mäe")); // filter noole järel pean ütlema tingimuse, mis juhul ta jäetakse alles
    uuendaPoed(vastus);
  }

  const muudaK6iki = () => {
    const vastus = poed.map(pood => pood.charAt(0) + pood); // .map noole järel pean ütlema mille ma panen igaühe asemele
    uuendaPoed(vastus);
  }

  const indexRef = useRef();
  const uusRef = useRef();

  const muudaPood = () => {
    // ["Mustamäe", "Õismäe", "Kristiine",  "Põhja-Tallinn", "Kesklinn"][1] = "Kakumäe";
    poed[indexRef.current.value] = uusRef.current.value;
    uuendaPoed(poed.slice());
  }

  const [valitudPood, uuendaValitudPood] = useState("");

  const vaata = (pood) => {
    console.log(pood); // logib meie brauseri konsooli (parem klõps -> inspect -> console)
    uuendaValitudPood(pood);
  }

  // const vaata = (index) => {
  //   //console.log(pood); // logib meie brauseri konsooli (parem klõps -> inspect -> console)
  //   uuendaValitudPood(poed[index]);
  // }

  return ( 
    <div>
      <button onClick={sorteeri}>Sorteeri A-Z</button>
      <button onClick={tyhjenda}>Tühjenda</button> 
      <button onClick={filtreeri}>Jäta vaid "mäe"-d sisaldavad alles</button>
      <button onClick={muudaK6iki}>Muuda kõiki</button>
      <br />

      <label>Uus pood</label> <br />
      <input ref={poodRef} type="text" /> <br />
      <button onClick={lisaPood}>Lisa uus pood</button> <br />

      {/* .map() on array-de kuvamiseks HTMLs, siis teen selle funktsionaalsuse, mis on sisus tsükkel
      tehakse noole paremat poolt nii mitu korda kui mitu komaga eristatud elementi mul on */}
      <div>Sinu valitud pood: {valitudPood}</div>

      <div>Poode on {poed.length} tk</div>

      {poed.map((pood,index) => 
        <div key={pood}>{pood} 
          <button onClick={() => kustuta(index)}>x</button>
          <button onClick={() => vaata(pood)}>Vaata</button>
        </div>)} 

      {/* <div *ngFor="let pood of poed; let i = index">{pood} <button onClick={() => kustuta(index)}>x</button></div> */}

      <label>Järjekorranumber</label> <label>Uus väärtus</label> <br />
      <input ref={indexRef} type="text" /> <input ref={uusRef} type="text" /> <br />
      <button onClick={muudaPood}>Muuda pood</button> <br />

      {/* {idd.map((id,index) => <div key={id}>{id} <button onClick={() => kustuta(index)}>x</button></div>)}  */}

      {/* <div key="Mustamäe">Mustamäe <button onClick={() => kustuta(0)}>x</button></div>
      <div key="Õismäe">Õismäe <button onClick={() => kustuta(1)}>x</button></div>
      <div key="Kristiine">Kristiine <button onClick={() => kustuta(2)}>x</button></div>
      <div key="Lasnamäe">Lasnamäe <button onClick={() => kustuta(3)}>x</button></div>
      <div key="Põhja-Tallinn">Põhja-Tallinn <button onClick={() => kustuta(4)}>x</button></div>
      <div key="Kesklinn">Kesklinn <button onClick={() => kustuta(5)}>x</button></div> */}
    </div> );
}

// .map is not a function <---- see tähendab, et .map ees ei ole [] väärtust

export default Poed;