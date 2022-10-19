// .. <- ühe kausta võrra üles (pages kaustast välja)
// css kaust
// ja sealt Cart.module.css
import styles from "../css/Cart.module.css";
import { useEffect, useRef, useState } from "react";

function Cart() {
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );
  const [parcelMachines, setParcelMachines] = useState([]);
  const pmRef = useRef();

  // uef
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json))
  }, []);

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

  const sendOrder = () => {
    console.log(pmRef.current.value);
    console.log(cart);
  }

  return ( 
    <div>
      {cart.map((element, index) => 
        <div key={index} className={styles.product}>
          <img className={styles.image} src={element.product.image} alt="" />
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} €</div>
          <div className={styles.quantity}>
            <img className={styles.button} onClick={() => decreaseQuantity(index)} src={require("../images/minus.png")} alt="" />
            <div>{element.quantity} tk </div>
            <img className={styles.button} onClick={() => increaseQuantity(index)} src={require("../images/plus.png")} alt="" />
          </div>
          <div className={styles.sum}>{ (element.product.price * element.quantity).toFixed(2) } €</div>
          <img className={styles.button} onClick={() => remove(index)} src={require("../images/remove.png")} alt="" />
        </div>)}
    
    <div className={styles.cart__bottom}>
      <div>Kokku: {calculateCartSum()} €</div>

      <select ref={pmRef}>{parcelMachines
                .filter(element => element.A0_NAME === "EE")
                .map(element => 
          <option key={element.NAME}>{element.NAME}</option>)}
      </select>

      <button onClick={sendOrder}>Vormista tellimus</button>
    </div>

    </div> );
}

export default Cart;

// Lõpuprojekt: Tehtud Reactis
// 1. Ise välja mõeldud projekt
// 2. Youtubest/Udemyst mõne koolitusseeria (videod)
// 3. Webshopist edasiarendus
// 4. Proovitöö ettevõttest