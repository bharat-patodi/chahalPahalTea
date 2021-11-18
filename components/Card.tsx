import styles from '../styles/Card.module.css';

// I could have created an interface for the type, but I am not reusing it so it seemed weird. I have inlined the type declaration; eliminates naming the prop types, which looks repetitive. It comes from https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
const Card = ({ name }: { name: string }) : JSX.Element => (
  <div className={styles.card}>
    <img src="https://via.placeholder.com/150x200" alt="Placeholder Image" />
    <section className={styles.cardText}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>Card Description</p>
    </section>
  </div>
);

export default Card;
