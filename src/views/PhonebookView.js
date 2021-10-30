import { useSelector } from 'react-redux';
import ContactsForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';
import Section from 'components/Section';
import styles from '../App.module.css';

import { getLoading, getError } from 'redux/phonebook';

const PhonebookView = () => {
  const loading = useSelector(getLoading);

  const error = useSelector(getError);

  return (
    <div className={styles.wrapper}>
      {error ? (
        <h1 className="error">{error.message}</h1>
      ) : (
        <Section title="Add new contact">
          {/* <h1>Phonebook</h1> */}
          <ContactsForm />
        </Section>
      )}

      <Section title="All contacts">
        <Filter />
        {loading && <Loader />}

        <ContactList />
      </Section>
    </div>
  );
};
export default PhonebookView;
