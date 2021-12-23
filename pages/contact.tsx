import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => (
  <>
    <Header />
    <main>
        <h1>Contact Us</h1>
      <p>
        Phone Number: +91 90990 90191
      </p>
      <p>
        Email: tejpan.biz@gmail.com
      </p>
      <form action="post">
        <label>Name</label>
          <input type="text" name="" id="" />
        <label>Email</label>
            <input type="email" name="" id="" />
        <label>Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </main>
    <Footer />
  </>
);

export default Contact;
