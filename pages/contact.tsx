import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";
import { supabase } from "../utils/supabaseClient";

const dbEnable = async () => {
  // let supabseStuff = supabase;
  let result = await supabase.from("Leads").select("*");
  console.log(supabase.from("Leads").select("*"));
  console.log(result);
};

const dbAdd = async () => {
  console.log("Data added");
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let telephone = 99999999 || document.querySelector("#telephone").value;
  let message = document.querySelector("#message").value;
  console.log(name, email, telephone, message);
  await supabase
    .from("Leads")
    .insert(
      {
        name: name,
        email: email,
        number: telephone,
        message: message,
      },
    );
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
            <select name="" id="">
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
            <input type="submit" value="Add Data" onClick={dbAdd} />
            <input type="submit" value="Submit" onClick={dbEnable} />
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
