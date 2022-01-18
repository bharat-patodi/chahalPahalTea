import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";
import { supabase } from "../utils/supabaseClient";

const dbEnable = () => {
  // let supabseStuff = supabase;
  console.log(supabase.from("leads").select("*"));
};

const dbAdd = () => {
  supabase
    .from("leads")
    .insert([
      {
        created_at: Date.now(),
        name: "test",
        email: "test@test.com",
        number: 9898989898,
        message: "test",
      },
    ]);
  console.log("Data added");
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
              id=""
              placeholder="animesh jain"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="animesh@gmail.com"
              required
            />
            <label>Number</label>
            <input type="tel" name="" id="" placeholder="9099090191" required />
            <label>Message</label>
            <textarea name="" id="" cols={30} rows={10}></textarea>
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
