import styles from './Button.module.css';

export default function Button({ children }) {
  return (
    <a href="/" className={styles.buttonBlue}>
      {children}
    </a>
  );
}
