import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Shop.module.css";
import { useState, useRef } from "react";
import { useCartContext } from "../context/XyzContext";

const Shop = () => {
  const [cart, setCart] = useCartContext();
  return (
  <>
    <Header />
    <main className={styles.shopPage}>
      <div>
        <h1>Shop</h1>
      </div>
      <section className={styles.productDashboard}>
        <ProductCard id="premiumChai" />
        <ProductCard id="elaichiChai" />
        <ProductCard id="adrakChai" />
        <ProductCard id="masalaChai" />
      </section>
    </main>
    <Footer />
  </>
)};

const ProductCard = (props: any) => {
  const [cart, setCart] = useCartContext();
  const [currentWeight, setCurrentWeight] = useState("gm250");
  const [currentChai, setCurrentChai] = useState("premiumChai");
  const [currentQtty, setCurrentQtty] = useState("gm250");
  const weightRef = useRef<HTMLSelectElement>(null);
  const quantityRef = useRef<HTMLSelectElement>(null);

  const handleProductAddition = () => {
    const weight = weightRef.current?.value;
    const quantity = Number(quantityRef.current?.value);
    console.log(props.id);
    console.log(weight);
    setCart((prevCart: { [key: string]: any }) => {
      if (prevCart && prevCart[currentChai]) {
        return {
          ...prevCart,
          [currentChai]: {
            ...prevCart[currentChai],
            // [weight as keyof typeof prevCart[typeof currentChai]]: {
            //   ...prevCart[currentChai].weight,
            //   quantity,
            // },
            [weight as string]: {
              ...prevCart[currentChai][weight as string],
              quantity,
            }
          }
        };
      }
      return prevCart;
    });
    console.log(weight, quantity);
    console.log("Product Added");
    console.log(cart);
  };

  return (
    <>
      <div className={styles.productCard}>
        <h3>{cart[props.id].name}</h3>
        <img src={cart[props.id].src} className={styles.productImage} />

        <p>{cart[props.id].details}</p>
        <p>
          <span className={styles.highlightText}>Price: </span> INR{" "}
          {cart[props.id][currentWeight]["price"]}
        </p>
        <p>
          <span className={styles.highlightText}>Shipping:</span> INR{" "}
          {cart[props.id].shipping}
        </p>
        <form>
          <label>
            <span className={styles.highlightText}>Weight:</span>{" "}
            <select
              name="weight"
              id=""
              ref={weightRef}
              onChange={(e) => {
                setCurrentWeight(e.target.value);
                setCurrentChai(props.id);
              }}
            >
              <option value="gm250">250gm</option>
              <option value="gm500">500gm</option>
              <option value="gm1000">1kg</option>
            </select>
          </label>
          <label>
            <span className={styles.highlightText}>Quantity:</span>{" "}
            <select
              name="quantity"
              id=""
              ref={quantityRef}
              onChange={(e) => {
                setCurrentQtty(e.target.value);
                setCurrentChai(props.id);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
              <br />
          <button
            type="button"
            className="defaultBtn"
            onClick={handleProductAddition}
          >Add to Cart</button>
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
