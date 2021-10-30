import styles from './stylesView.module.css';

const HomeView = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome! Notebook of your contacts!
        {/* <span role="img" aria-label="Иконка приветствия">
          
        </span> */}
      </h1>
    </div>
  );
};
export default HomeView;
