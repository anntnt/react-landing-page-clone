import styles from './Section.module.css';

export default function Section({
  children,
  large,
  thin,
  lightBgColor,
  flexDirectionRow,
  expert,
}) {
  return (
    <section
      className={`${large ? styles.largeSection : thin ? styles.thinSection : styles.section} } ${lightBgColor ? styles.lightBgColor : styles.darkBgColor}
      ${flexDirectionRow ? styles.flexDirectionRow : styles.flexDirectionColumn}
      ${expert ? styles.expert : ''}`}
    >
      {children}{' '}
    </section>
  );
}
