import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";

const Contact = () => (
  <>
    <Header />
    <main>
      <h1>Contact Us</h1>
      <div className={styles.contact}>
        <section className={styles.enquiryForm}>
          <h3>Enquiry Form</h3>
          <select name="" id="">
            <option value="customer">customer</option>
            <option value="distributor">distributor</option>
          </select>

          <form action="post">
            <label>Name</label>
            <input type="text" name="" id="" />
            <label>Email</label>
            <input type="email" name="" id="" />
            <label>Message</label>
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <input type="submit" value="Submit" />
          </form>
        </section>
        <section className="contactDetails">
          <p>Phone Number: +91 90990 90191</p>
          <p>Email: tejpan.biz@gmail.com</p>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Contact;
