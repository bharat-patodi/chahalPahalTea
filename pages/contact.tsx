import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";
import { supabase } from "../utils/supabaseClient";

// const dbEnable = async () => {
//   let result = await supabase.from("Leads").select("*");
//   console.log(supabase.from("Leads").select("*"));
//   console.log(result);
// };

const addLead = async () => {
  let usertype =  (document.querySelector("#usertype") as HTMLSelectElement)?.value;
  let name =      (document.querySelector("#name") as HTMLInputElement)?.value;
  let email =     (document.querySelector("#email") as HTMLInputElement)?.value;
  let telephone = Number((document.querySelector("#telephone") as HTMLInputElement)?.value);
  let message =   (document.querySelector("#message") as HTMLInputElement)?.value;

  console.log("Data added");
  console.log(typeof usertype, name, email, typeof telephone, telephone, message);

  let result = await supabase
    .from("Leads")
    .insert(
      {
        usertype: usertype,
        name: name,
        email: email,
        number: telephone,
        message: message,
      },
    );
  // Console log the response from server
  console.log(result);



};

const Contact = () => (
  <>
    <Header />
    <h1 className={styles.heading}>Contact Us</h1>
    <main>
      <div className={styles.contact}>
        <section className={styles.enquiryForm}>
          <h3>Enquiry Form</h3>
          <form action="post">
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
            <input type="tel" name="" id="telephone" placeholder="9099090191" required />
            <label>Message</label>
            <textarea name="" id="message" cols={30} rows={10}></textarea>
            <input type="button" value="Submit" onClick={addLead} />
          </form>
        </section>
        <section className={styles.contactDetails}>
          <p>Phone: +91 90990 90191</p>
          <p>Email: tejpan.biz@gmail.com</p>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Contact;
