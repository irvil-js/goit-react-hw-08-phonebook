import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './stylesView.module.css';

const LoginView = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
        <label className={styles.label}>
          Email
          <input
            onChange={handleChange}
            className={styles.input}
            value={email}
            type="email"
            placeholder="user@gmail.com"
            name="email"
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            onChange={handleChange}
            className={styles.input}
            value={password}
            type="password"
            placeholder="at least 8 characters"
            name="password"
          />
        </label>
        <button className={styles.button} type="submit">
          {' '}
          LogIn
        </button>
      </form>
    </div>
  );
};
export default LoginView;
