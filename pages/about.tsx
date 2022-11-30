import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={`${styles.aboutPage}`}>
      <Header />
      <main className="container">
        <div>
          <h1>About</h1>
          <p>
            Chahal Pahal Tea brand owned by Tejpan Enterprises. This
            organization come with rich 50 years of experience of spice and tea.
            Comes from Jain family where providing quality products is pivotal
            priority. Chahal Pahal Tea is new age brand which is customer
            centric and is continuously growing on customer demand. Chahal Pahal
            Premium tea is a quality blend of tea which provided right taste and
            color. Elaichi and adrak flavor comes with original spices and “zero
            artificial flavors”.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default About;
