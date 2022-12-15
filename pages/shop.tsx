import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Shop.module.css";
import { useState } from "react";
import { useCartContext } from "../context/XyzContext";
import Link from "next/link";
import Image from "next/image";

const handleProductAddition = (e: Event) => {
  e.preventDefault();
  console.log("Product Added");
}

const Shop = () => {
  // const [productList, setProductList] = useState();
  const [cart, setCart] = useCartContext();
  console.log({cart});
  return (
    <>
      <Header />
      <main className={styles.shopPage}>
        <div>
          <h1>Shop</h1>
        </div>
        <section className={styles.productDashboard}>
          <ProductView
            name="Premium Tea"
            id="premiumChai"
            src="premium-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/Q79HQ5ux"
            price={cart.premiumChai.gm250.price}
            weight="250 gm"
            shipping={50}
          />
          <ProductView
            name="Elaichi Tea"
            id="elaichiChai"
            src="elaichi-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/MEaTQqS"
            price={cart.elaichiChai.gm250.price}
            weight="250 gm"
            shipping={50}
          />
          <ProductView
            name="Adrak Tea"
            id="adrakChai"
            src="adrak-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/jDYk74VMf"
            price={cart.adrakChai.gm250.price}
            weight="250 gm"
            shipping={50}
          />
          <ProductView
            name="Masala Tea"
            id="masalaChai"
            src="masala-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/TzZAvbE"
            price={cart.masalaChai.gm250.price}
            weight="250 gm"
            shipping={50}
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

const ProductView = (props: any) => {
    const [cart, setCart] = useCartContext();
    const [currentWeight, setCurrentWeight] = useState("gm250");
  return (
    <>
      <div className={styles.productView}>
        <h3>{props.name}</h3>
        <img src={props.src} className={styles.productImage} />

        <p>{props.details}</p>
        <p>
          <span className={styles.highlightText}>Price: </span> INR{" "}
          {cart[props.id][currentWeight]['price']}
        </p>
        <p>
          <span className={styles.highlightText}>Shipping:</span> INR{" "}
          {props.shipping}
        </p>
        <p>
          <span className={styles.highlightText}>Total:</span> INR{" "}
          {props.shipping + props.price}
        </p>
        <form>
          <label htmlFor="">
            <span className={styles.highlightText}>Weight:</span>{" "}
            <select
              name="weight"
              id=""
              onChange={(e) => {
                // setCurrentWeight
                console.log("changed");
                console.log(e.target.value);
                setCurrentWeight(e.target.value);
                console.log(currentWeight);
                // console.log(e.target.parentElement.dataset.chainame);
                // setCart((prevCart: object) => ({
                //   ...prevCart,
                //   [props.id]: {
                //     gm250: {
                //       price: cart[props.id].price,
                //       quantity: cart[props.id].quantity
                //     }
                //     // tempPrice: Number(e.target.value)*Number(cart[props.id].price)
                //   }
                // }));
                console.log(cart);
              }}
            >
              <option value="gm250">250gm</option>
              <option value="gm500">500gm</option>
              <option value="gm1000">1kg</option>
            </select>
            {/* {props.weight} */}
          </label>
          <label>
            <span className={styles.highlightText}>Quantity:</span>{" "}
            <select name="quantity" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          {/* <a href={props.href} target="_blank" rel="noreferrer"> */}
          <input
            type="submit"
            className={styles.productPurchaseBtn}
            // onClick={handleProductAddition}
            value="Add to Cart"
          />
          {/* </a> */}
        </form>
        <p className={styles.disclaimer}>
          *After payment, please whatsapp/message your complete postal address
          on this number: +91 90990-90191
        </p>
      </div>
    </>
  );
};

export default Shop;
