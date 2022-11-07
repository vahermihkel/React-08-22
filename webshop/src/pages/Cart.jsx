// .. <- ühe kausta võrra üles (pages kaustast välja)
// css kaust
// ja sealt Cart.module.css
import styles from "../css/Cart.module.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// headless wordpress   / headless woocommerce   / headless cms

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
    const api = new WooCommerceRestApi({
      url: "http://localhost/wordpress/",
      consumerKey: "ck_bd51761123b321accde947d002fd6e4cc8691a5d",
      consumerSecret: "cs_f1afebf685ceee83d3f8afa4588e2fddeb8ec5b1",
      version: "wc/v3",
      queryStringAuth: true,
      axiosConfig: {
        headers: {'Content-Type': 'application/json'},
      }
    });
    //               noole järel välimised loogelised sulud on funktsiooni tähistus
    const woocommerceCart = cart.map(element => { 
      return {product_id: element.product.id, quantity: element.quantity}
    });
    api.post("orders", {"line_items": woocommerceCart})
      // .then(res => console.log(res))
      .then(res => pay(res.data.id))

    // [  {product: {id: 13, name: "ads"}, quantity: 2}, ....  ]
    // [  {product_id: 13, quantity: 2}, {product_id: 56, quantity: 5}  ]
  }

  const pay = (orderId) => {

    const data = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": calculateCartSum(),
      "order_reference": orderId,
      "nonce": "a9b7f7easda2123" + Math.random() * 999999 + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://react-09-22-v.web.app"
      }

    fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",{
      "method": "POST",
      "body": JSON.stringify(data),
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
      }
    }).then(res => res.json())
    .then(json => window.location.href = json.payment_link );
      // payment_link ---> rida 11 tagastuses
      // json ise ongi tagastus
      // window.location.href <------ JavaScipti sissekirjutatud viis kuidas URLi muuta
  }

  return ( 
    <div>
      {cart.map((element, index) => 
        <div key={index} className={styles.product}>
          {/* <img className={styles.image} src={element.product.image} alt="" /> */}
          { element.product.images[0] && <img className={styles.image} src={element.product.images[0].src} alt="" />}
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} €</div>
          <div className={styles.quantity}>
            <img className={styles.button} onClick={() => decreaseQuantity(index)} src={"/images/minus.png"} alt="" />
            <div>{element.quantity} tk </div>
            <img className={styles.button} onClick={() => increaseQuantity(index)} src={"/images/plus.png"} alt="" />
          </div>
          <div className={styles.sum}>{ (element.product.price * element.quantity).toFixed(2) } €</div>
          <img className={styles.button} onClick={() => remove(index)} src={"/images/remove.png"} alt="" />
        </div>)}
    
    { cart.length > 0 && 
    <div className={styles.cart__bottom}>
      <div>Kokku: {calculateCartSum()} €</div>

      <select ref={pmRef}>{parcelMachines
                .filter(element => element.A0_NAME === "EE")
                .map(element => 
          <option key={element.NAME}>{element.NAME}</option>)}
      </select>

      <button onClick={sendOrder}>Vormista tellimus</button>
    </div>}
    { cart.length === 0 && 
      <div>
        <div>Ostukorvis pole tooteid.</div>
        <div>Vajuta <Link to="/tooted">siia</Link>, et jätkata ostlemist.</div>
      </div> }

    </div> );
}

export default Cart;

// MeetFrank
// LinkedIn
// Otse ettevõtete e-mailidele kirjutamine
// Cvkeskus/cvonline/cv


// Lõpuprojekt: Tehtud Reactis
// 1. Ise välja mõeldud projekt
// 2. Youtubest/Udemyst mõne koolitusseeria (videod)
// 3. Webshopist edasiarendus
// 4. Proovitöö ettevõttest