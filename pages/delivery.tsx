import Header from "../components/Header";
import Footer from "../components/Footer";

const Delivery = () => {
  return (
    <div className="superContainer">
      <Header />
      <main>
        <div className="container">
          <h1>Shipping and Delivery</h1>
          <h2>Shipping</h2>
          <p>
            Orders received on working days will be shipped in a minimum 2 days
            and a maximum of 7 days. The Products are shipped through our
            courier partners. All products are shipped directly from our HO in
            Indore.
          </p>
          <h2>CHARGES</h2>
          <p>
            The charges for shipping products shopped at chahalpahaltea.com
            depends on the location to which you want your purchases to be
            shipped.
          </p>
          <h2>DELIVERY</h2>
          <p>
            The purchased products from chahalpahaltea.com will be shipped to
            the address provided by you in our website. Please ensure to verify
            the address entered by you before confirming your order to avoid
            incorrect delivery. If door to door delivery is not available by the
            courier. The courier would be sent to the courier branch nearest to
            PIN provided. In case of multiple orders, items may be shipped under
            single purchase orders. This is to facilitate quicker and safer
            shipping of various items. Your order dispatch time will be between
            10.00 am to 6.00 pm unless otherwise specified. Tejpan Enterprises
            is not responsible for delayed shipments in the event of service
            interruptions or failures caused by events, which are beyond the
            control of Tejpan Enterprises. These interruptions include but are
            not limited to transportation system, customs clearance issues,
            shipping carrier delays or cardholder&apos;s credit card or bank
            delays or acts of God.
          </p>
          <h2>TIME FRAME</h2>
          <p>
            All delivery dates posted online and offline are estimated lead
            times. Estimated lead times and delivery times are always subject to
            change without notification. Seller cannot be held responsible for
            any delay in delivery or extended lead times. SHIPPING CHARGES
            Shipping costs are based on weight and are calculated at the time of
            selecting the item. To reflect the policies of the courier companies
            we use, all weights will be rounded up to the next full kg.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Delivery;
