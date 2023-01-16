import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Cart.module.css";
import { useState } from "react";
import { CartItem, useCartContext } from "../context/XyzContext";
// For toast
import { supabase } from "../utils/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  // const [cart, setCart] = useCartContext();
  const [cart, setCart] = useCartContext();
  const [total, setTotal] = useState(0);
  let tempTotal = 0;

  console.log(cart);
  // let total =
  //   cart.adrakChai.gm1000.price * cart.adrakChai.gm1000.quantity +
  //   cart.adrakChai.gm500.price * cart.adrakChai.gm500.quantity +
  //   cart.adrakChai.gm250.price * cart.adrakChai.gm250.quantity;

  const addLead = async (e: any) => {
    // let usertype = (document.querySelector("#usertype") as HTMLSelectElement)
    //   ?.value;
    // let name = (document.querySelector("#name") as HTMLInputElement)?.value;
    // let email = (document.querySelector("#email") as HTMLInputElement)?.value;
    // let telephone = Number(
    //   (document.querySelector("#telephone") as HTMLInputElement)?.value
    // );
    // let message = (document.querySelector("#message") as HTMLInputElement)
    //   ?.value;
    // e.preventDefault();
    // let response = await supabase.from("Leads").insert({
    //   usertype: usertype,
    //   name: name,
    //   email: email,
    //   number: telephone,
    //   message: message,
    // });
    // console.log(response);
    // // Console log the response from server
    // if (response.status === 201) {
    //   console.log("Data added");
    //   console.log(response);
    //   toast.success(" \u{1F44D} Thank You for your enquiry", {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    // }
    // e.target.reset();
  };
  return (
    <div className="superContainer">
      <Header />
      <main className="container">
        <div>
          <h1>Cart</h1>
          <section className={styles.cartDashboardSection}>
            {/* <h3>ले लो भैया!</h3> */}
            <section className={styles.cartCard}>
              <p>Product</p>
              <p>Weight</p>
              <p>Quantity</p>
              <p>Price (INR)</p>
            </section>
            {(Object.values(cart) as Array<CartItem>).map(
              (currChai: CartItem) => {
                let weights = ["gm250", "gm500", "gm1000"];
                for (let i = 0; i < 3; i++) {
                  if (currChai.gm250.quantity > 0) {
                    tempTotal += currChai.gm250.quantity * currChai.gm250.price;
                    // setTotal(tempTotal);
                    console.log({ tempTotal });
                    // console.log({total});
                    return (
                      <>
                        <hr />
                        <section className={styles.cartCard}>
                          <div className={styles.cartCardName}>
                            <img src={currChai.src} width="100px" />
                            <p>{currChai.name}</p>
                          </div>
                          <p>250 gm</p>
                          <p>{currChai.gm250.quantity}</p>
                          <p>
                            INR {currChai.gm250.price * currChai.gm250.quantity}
                          </p>
                        </section>
                      </>
                    );
                  }
                  if (currChai.gm500.quantity > 0) {
                    tempTotal += currChai.gm250.quantity * currChai.gm250.price;
                    return (
                      <>
                        <hr />
                        <section className={styles.cartCard}>
                          <div className={styles.cartCardName}>
                            <img src={currChai.src} width="100px" />
                            <p>{currChai.name}</p>
                          </div>
                          <p>250 gm</p>
                          <p>{currChai.gm500.quantity}</p>
                          <p>
                            INR {currChai.gm500.price * currChai.gm500.quantity}
                          </p>
                        </section>
                      </>
                    );
                  }
                  if (currChai.gm1000.quantity > 0) {
                    tempTotal += currChai.gm250.quantity * currChai.gm250.price;
                    return (
                      <>
                        <hr />
                        <section className={styles.cartCard}>
                          <div className={styles.cartCardName}>
                            <img src={currChai.src} width="100px" />
                            <p>{currChai.name}</p>
                          </div>
                          <p>250 gm</p>
                          <p>{currChai.gm1000.quantity}</p>
                          <p>
                            INR{" "}
                            {currChai.gm1000.price * currChai.gm1000.quantity}
                          </p>
                        </section>
                      </>
                    );
                  }
                }
                console.log({ tempTotal });
                return "";
              }
            )}
            {console.log({ hi: tempTotal })}
            {/* {setTotal(tempTotal)} */}
            <section className={styles.cartCard}>
              <p>Total</p>
              <p>INR {total}</p>
            </section>
          </section>
          {/* Make a component out of this form. I've used it twice now.*/}
          <section className={styles.detailsSection}>
            <section className={styles.cartCustomerDetailsSection}>
              <div className={styles.contact}>
                <section className={styles.enquiryForm}>
                  <h3>कहाँ भेजें आपकी चाय? 🙏</h3>
                  <form action="post" onSubmit={addLead}>
                    <select name="" id="usertype">
                      <option value="customer">Customer</option>
                      <option value="distributor">Distributor</option>
                    </select>
                    <label>Name</label>
                    <input
                      type="text"
                      name=""
                      id="name"
                      placeholder="animesh jain"
                      required
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      name=""
                      id="email"
                      placeholder="animesh@gmail.com"
                      required
                    />
                    <label>Number</label>
                    <input
                      type="tel"
                      name=""
                      id="telephone"
                      placeholder="9099090191"
                      required
                    />
                    <label>Address</label>
                    <textarea
                      name=""
                      id="message"
                      cols={30}
                      rows={10}
                    ></textarea>
                    <input type="submit" value="Submit" />
                  </form>
                </section>
              </div>
            </section>
            <section className={styles.paymentDetailsSection}>
              <h3>यहाँ पेमेंट करें</h3>
              <div className={styles.paymentDetails}>
                <div className={styles.paymentDetailsInstruments}>
                  <p>Use the following UPI ID to make the payment: </p>
                  <p>animeshkjain-1@okicici</p>
                </div>
                <div className={styles.paymentDetailsInstruments}>
                  <p>OR scan this code to make the payment!</p>
                  <img
                    src="payment-details-qr-code.png"
                    className={styles.paymentDetailsImg}
                  />
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
      <ToastContainer />
      <Footer />
    </div>
  );
};
export default Cart;
