import { useState } from "react";
// .. <- ühe kausta võrra üles (pages kaustast välja)
// css kaust
// ja sealt Cart.module.css
import styles from "../css/Cart.module.css";

function Cart() {
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );

  const remove = (productIndex) => {
    cart.splice(productIndex,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const decreaseQuantity = (productIndex) => {
    cart[productIndex].quantity = cart[productIndex].quantity - 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (productIndex) => {
    cart[productIndex].quantity = cart[productIndex].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calculateCartSum = () => {
    let cartSum = 0;
            //                  75  =     0   +      14.99            *      5
    cart.forEach(element => cartSum = cartSum + element.product.price * element.quantity);
    return cartSum.toFixed(2);
  }

  return ( 
    <div>
      {cart.map((element, index) => 
        <div key={index} className={styles.product}>
          <img className={styles.image} src={element.product.image} alt="" />
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} €</div>
          <button onClick={() => decreaseQuantity(index)}>-</button>
          <div className={styles.quantity}>{element.quantity} tk</div>
          <button onClick={() => increaseQuantity(index)}>+</button>
          <div className={styles.sum}>{ (element.product.price * element.quantity).toFixed(2) } €</div>
          <button onClick={() => remove(index)}>x</button>
        </div>)}
      <div>Kokku: {calculateCartSum()} €</div>
    </div> );
}

export default Cart;