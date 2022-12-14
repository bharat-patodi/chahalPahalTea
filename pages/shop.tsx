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
          {/* <h2>Coming Soon</h2> */}
        </div>
        <section className={styles.productDashboard}>
          <ProductView
            name="Premium Tea"
            id="premiumChai"
            src="premium-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/Q79HQ5ux"
            price={cart.premiumChai.tempPrice}
            weight="250 gm"
            shipping={50}
          />
          <ProductView
            name="Elaichi Tea"
            id="elaichiChai"
            src="elaichi-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/MEaTQqS"
            price={cart.elaichiChai.tempPrice}
            weight="250 gm"
            shipping={50}
          />
          <ProductView
            name="Adrak Tea"
            id="adrakChai"
            src="adrak-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/jDYk74VMf"
            price={cart.adrakChai.tempPrice}
            weight="250 gm"
            shipping={50}
          />
          <ProductView
            name="Masala Tea"
            id="masalaChai"
            src="masala-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/TzZAvbE"
            price={cart.masalaChai.tempPrice}
            weight="250 gm"
            shipping={50}
          />
          {/* <ProductView
            name="All Flavours in One"
            id="allFlavoursChai"
            src="all-flavours.png"
            details=""
            href="https://rzp.io/i/Nsl9maW18"
            price={508}
            weight="250 gm x 4 = 1 kg"
            shipping={0}
          /> */}
        </section>
      </main>

      <Footer />
    </>
  );
};

const ProductView = (props: any) => {
    const [cart, setCart] = useCartContext();
  return (
    <>
      <div className={styles.productView}>
        <h3>{props.name}</h3>
        <img src={props.src} className={styles.productImage} />

        <p>{props.details}</p>
        <p>
          <span className={styles.highlightText}>Price: </span> INR{" "}
          {props.price}
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
            <select name="weight" id="" onChange={(e) => {
              console.log("mast hai");
              console.log(e.target);
              console.log(e.target.value);
              console.log(props.id);
              console.log(cart);
              console.log(cart[props.id]);
              console.log(cart[props.id].price, typeof cart[props.id].price);
              console.log(Number(cart[props.id].price));
              console.log(Number(e.target.value));
              console.log(Number(e.target.value) * Number(cart[props.id].price));
              // console.log(e.target.parentElement.dataset.chainame);
              setCart((prevCart: object) => ({
                ...prevCart,
                [props.id]: {
                  quantity: cart[props.id].quantity,
                  price: cart[props.id].price,
                  tempPrice: Number(e.target.value)*Number(cart[props.id].price)
                }
              }));
              console.log(cart);
            }}>
            <option value="0.25">250gm</option>
            <option value="0.5">500gm</option>
            <option value="1">1kg</option>
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
            onClick={handleProductAddition}
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
