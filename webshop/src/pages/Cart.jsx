import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );

  const remove = (productIndex) => {
    cart.splice(productIndex,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return ( 
    <div>
      {cart.map((element, index) => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          <button onClick={() => remove(index)}>x</button>
        </div>)}
    </div> );
}

export default Cart;