import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        exact
        to="/"
        activeClassName={styles.activeLink}
        className={s.link}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contact"
          activeClassName={s.activeLink}
          className={styles.link}
        >
          Contact
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
