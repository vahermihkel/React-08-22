import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );

  return ( 
    <div>
      {cart.map(element => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
        </div>)}
    </div> );
}

export default Cart;