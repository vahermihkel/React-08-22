import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";

function Products() {

  // KODUS ostukorvi lisamine täpselt nagu eesti keelses projektis

  return ( 
    <div>
      {productsFromFile.map(element => 
          <div>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}</div>
            <Button variant="success">Lisa ostukorvi</Button>
          </div>
        )}
    </div> );
}

export default Products;