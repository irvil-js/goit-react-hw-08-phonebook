import { NavLink } from 'react-router-dom';
import styles from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <nav>
      <NavLink
        to="/register"
        activeClassName={styles.activeLink}
        className={styles.link}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        activeClassName={styles.activeLink}
        className={styles.link}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default AuthNavigation;
