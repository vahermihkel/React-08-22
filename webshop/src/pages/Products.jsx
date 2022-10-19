import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";

// 1. teete kuskil koolitusel/Youtube/Udemys asja kaasa, jätate meelde ja kui on vaja kasutada, siis otsite üles
// 2. kui teete kuskil suuremas projektis arendust, siis otsite samasugust funktsionaalsust kuskil teises failis
// 3. otsida Google otsingu abiga kuidas seda teha
// 4. teete ise peast

// [{},{},{},{}] 301tk KÕIK productsFromFile
// [{},{},{}] 240tk FILTREERITUD KUJUL categoryProducts
// [{},{}] 20tk  MIDA NÄITAN KASUTAJALE products

function Products() {
                            // 301tk/60tk/240tk/1tk - kuhu filtreeritakse ja mille seast lehekülgede kaupa liigutakse
  const [categoryProducts, setCategoryProducts] = useState(productsFromFile.slice());
  const [products, setProducts] = useState(productsFromFile.slice(0,20)); // 20tk - mida välja näidatakse lehekülje kaupa
  // [{name: "Nobe", category: "car"}, {name: "BMW", category: "car"}, {name: "Tesla", category: "car"}]
  //                                {name: "Nobe", category: "car"} =>   .category ------> "car"
  //                                {name: "BMW", category: "car"} =>  .category ------> "car"
  const categories = [...new Set(productsFromFile.map(element => element.category))];
  // categories = ["car", "car", "car"];

  // KODUS ostukorvi lisamine täpselt nagu eesti keelses projektis

  // const months = [
  //   {kuu:'March', nrAastas: 3}, 
  //   {kuu:'Jan', nrAastas: 1}, 
  //   {kuu:'April', nrAastas: 4}, 
  //   {kuu:'Feb', nrAastas: 2}, 
  //   {kuu:'Dec', nrAastas: 12}
  // ];
  // months.sort( (first,second) => first.kuu.localeCompare(second.kuu) );
  // console.log(months);
  
  // months.sort( (first,second) => first.nrAastas - second.nrAastas );
  // console.log(months);

  const [activePage, setActivePage] = useState(1);
  const pages = [];
  for (let index = 0; index < categoryProducts.length/20; index++) {
    pages.push(index + 1);
  }

  const sortAZ = () => {
    categoryProducts.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const sortZA = () => {
    categoryProducts.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const sortPriceAsc = () => {
    categoryProducts.sort((a,b) => a.price - b.price);
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }  // a.price

  const sortPriceDesc = () => {
    categoryProducts.sort((a,b) => b.price - a.price);
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const sortIdAsc = () => {
    categoryProducts.sort((a,b) => a.id - b.id);
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const sortIdDesc = () => {
    categoryProducts.sort((a,b) => b.id - a.id);
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const showByCategory = (categoryClicked) => {
    // .filter()   .includes("mäe")   startsWith("M")  endsWith("y")    .length === 6  
    // categoryClicked === element.category
    const result = productsFromFile.filter(element => element.category === categoryClicked);
    setCategoryProducts(result);
    setProducts(result.slice(0,20));
    setActivePage(1);
  }

  const changeActivePage = (pageClicked) => {
    setActivePage(pageClicked);
    setProducts(categoryProducts.slice(pageClicked*20-20,pageClicked*20));
  }

  /* productClicked ---> {"id":7618,"image":"httpss-l225.webp","name":"Case For iPhone","price":5,"description":"Case For iPhone 14 13 12 11 Pro Max Clear Plating Shockproof Soft Silicone Cover","category":"luxury","active":true} */
  // [{id:"",name""},{id:"",name""},{id:"",name""}]
  // [{product: {id:"",name""}, quantity: 4}, {product: {id:"",name""}, quantity:5}, {product: {id:"",name""}, quantity: 6}]
  const addToCart = (productClicked) => {
    let cartLS = localStorage.getItem("cart");
    cartLS = JSON.parse(cartLS) || [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index === -1) {//kui järjekorranumber on -1, siis järelikult teda pole olemas. kui on olemas, index: 0,1,2
      cartLS.push({product: productClicked, quantity: 1});
    } else {
      // 1. tootedLS[j2rjekorraNumber] = ref.current.value;
      // 2. const uusToode = {nimi: nimiRef.current.value, hind: hindRef.current.value};
      // tootedLS[j2rjekorraNumber] = uusToode;
      cartLS[index].quantity = cartLS[index].quantity + 1;
    }
    cartLS = JSON.stringify(cartLS);
    localStorage.setItem("cart", cartLS);
  }

  // localStorage.clear(); // method   function tühjendada kogu localStorage
  // let productsLS = localStorage.getItem("products");  // võtta võtme alusel väärtus
  // let languageKey = localStorage.key(3); //  mitmendat järjekorras ma kasutusele võtta tahan 
  // console.log(localStorage.length); // property    key --> value  mitu tk
  // localStorage.removeItem("cart"); // saan eemaldada seda võti-väärtus paari
  // localStorage.setItem("võti", "väärtus"); // saan võtme alusel lisada väärtust

  // const midagi = JSON.parse("sõna") // võta jutumärgid maha
  // const string = JSON.stringify(cartLS) // pane jutumärgid peale

  // console.log("dasdasd");


  return ( 
    <div>
      <Pagination>
        {pages.map(number => 
        <Pagination.Item key={number} onClick={() => changeActivePage(number)} active={number === activePage}>
          {number}
        </Pagination.Item>)}
      </Pagination>

      {categories.map(element => 
        <button key={element} onClick={() => showByCategory(element)}>
          {element}
        </button>)}
            {/* {activePage*20} / */}
      <div>Tooteid on {categoryProducts.length} tk</div>

      <div>
        <button onClick={sortAZ}>Sorteeri A-Z</button>
        <button onClick={sortZA}>Sorteeri Z-A</button>
        <button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</button>
        <button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</button>
        <button onClick={sortIdAsc}>Sorteeri vanemad enne</button>
        <button onClick={sortIdDesc}>Sorteeri uuemad enne</button>
      </div>

      {products.map(element => 
          <div className="product" key={element.id}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}</div>
  {/* element ---> {"id":7618,"image":"httpss-l225.webp","name":"Case For iPhone","price":5,"description":"Case For iPhone 14 13 12 11 Pro Max Clear Plating Shockproof Soft Silicone Cover","category":"luxury","active":true} */}
            <Button onClick={() => addToCart(element)} variant="success">Lisa ostukorvi</Button>
          </div>
        )}

    </div> );
}

export default Products;