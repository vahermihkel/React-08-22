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
                            // 60tk/240tk/1tk - kuhu filtreeritakse ja mille seast lehekülgede kaupa liigutakse
  const [categoryProducts, setCategoryProducts] = useState(productsFromFile);
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
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a,b) => a.price - b.price);
    setProducts(products.slice());
  }  // a.price

  const sortPriceDesc = () => {
    products.sort((a,b) => b.price - a.price);
    setProducts(products.slice());
  }

  const sortIdAsc = () => {
    products.sort((a,b) => a.id - b.id);
    setProducts(products.slice());
  }

  const sortIdDesc = () => {
    products.sort((a,b) => b.id - a.id);
    setProducts(products.slice());
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

      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</button>
      <button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</button>
      <button onClick={sortIdAsc}>Sorteeri vanemad enne</button>
      <button onClick={sortIdDesc}>Sorteeri uuemad enne</button>

      {products.map(element => 
          <div key={element.id}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}</div>
            <Button variant="success">Lisa ostukorvi</Button>
          </div>
        )}

    </div> );
}

export default Products;