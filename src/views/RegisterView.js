import styles from './stylesView.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
      <label className={styles.label}>
        Name
        <input
          onChange={handleChange}
          className={styles.input}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
        />
      </label>
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
      <button type="submit"> Sign up</button>
    </form>
  );
};
export default RegisterView;
