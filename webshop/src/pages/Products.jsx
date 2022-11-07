import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

function Products() {
  const [dbProducts, setDbProducts] = useState([]);          // SIIN SEES on kõik andmebaasitooted 300tk
  const [categoryProducts, setCategoryProducts] = useState([]); // SIIN SEES on ühe kategooria lõikes tooted 120tk
  const [products, setProducts] = useState([]);   // SIIN SEES on ühe kategooria ühe lehekülje tooted 20tk
  const [categories, setCategories] = useState([]);

  useEffect(() => { // kui lehele tulen ja koheselt (mitte nupuvajutusega) tehakse API päring (teise rakendusse)
    const api = new WooCommerceRestApi({
      url: "http://localhost/wordpress/",
      consumerKey: "ck_bd51761123b321accde947d002fd6e4cc8691a5d",
      consumerSecret: "cs_f1afebf685ceee83d3f8afa4588e2fddeb8ec5b1",
      version: "wc/v3",
      axiosConfig: {
        headers: {'Content-Type': 'application/json'},
      }
    });
    api.get("products", {
      per_page: 100, // 100 products per page
    })
      .then((response) => {
        setDbProducts(response.data);
        setProducts(response.data.slice(0,3));
        setCategoryProducts(response.data);
        setCategories([...new Set(response.data.map(element => element.categories[0].name))])
      })
  }, []);

  const [activePage, setActivePage] = useState(1);
  const pages = [];
  for (let index = 0; index < categoryProducts.length/3; index++) {
    pages.push(index + 1);
  }

  const sortAZ = () => {
    categoryProducts.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(categoryProducts.slice(0,3));
    setActivePage(1);
  }

  const sortZA = () => {
    categoryProducts.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(categoryProducts.slice(0,3));
    setActivePage(1);
  }

  const sortPriceAsc = () => {
    categoryProducts.sort((a,b) => a.price - b.price);
    setProducts(categoryProducts.slice(0,3));
    setActivePage(1);
  }  // a.price

  const sortPriceDesc = () => {
    categoryProducts.sort((a,b) => b.price - a.price);
    setProducts(categoryProducts.slice(0,3));
    setActivePage(1);
  }

  const sortIdAsc = () => {
    categoryProducts.sort((a,b) => a.id - b.id);
    setProducts(categoryProducts.slice(0,3));
    setActivePage(1);
  }

  const sortIdDesc = () => {
    categoryProducts.sort((a,b) => b.id - a.id);
    setProducts(categoryProducts.slice(0,3));
    setActivePage(1);
  }

  // ENNE: element.image
  // WORDPRESSIS: element.images[0].src

  // ENNE: element.category
  // NÜÜD: element.categories[0].name

  const showByCategory = (categoryClicked) => {
    const result = dbProducts.filter(element => element.categories[0].name === categoryClicked);
    setCategoryProducts(result);
    setProducts(result.slice(0,3));
    setActivePage(1);
  }

  const changeActivePage = (pageClicked) => {
    setActivePage(pageClicked);
    setProducts(categoryProducts.slice(pageClicked*3-3,pageClicked*3));
  }

  const addToCart = (productClicked) => {
    let cartLS = localStorage.getItem("cart");
    cartLS = JSON.parse(cartLS) || [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index === -1) {//kui järjekorranumber on -1, siis järelikult teda pole olemas. kui on olemas, index: 0,1,2
      cartLS.push({product: productClicked, quantity: 1});
    } else {
      cartLS[index].quantity = cartLS[index].quantity + 1;
    }
    cartLS = JSON.stringify(cartLS);
    localStorage.setItem("cart", cartLS);
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
            { element.images[0] && <img src={element.images[0].src} alt="" />}
            <div>{element.name}</div>
            <div>{element.price}</div>
  {/* element ---> {"id":7618,"image":"httpss-l225.webp","name":"Case For iPhone","price":5,"description":"Case For iPhone 14 13 12 11 Pro Max Clear Plating Shockproof Soft Silicone Cover","category":"luxury","active":true} */}
            <Button onClick={() => addToCart(element)} variant="success">Lisa ostukorvi</Button>
          </div>
        )}

    </div> );
}

export default Products;