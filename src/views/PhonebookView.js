import { useSelector } from 'react-redux';
import ContactsForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';
import Section from 'components/Section';

import { getLoading, getError } from 'redux/phonebook';
// import { getLoading, getError, getVisible } from 'redux/phonebook';

const PhonebookView = () => {
  const loading = useSelector(getLoading);

  const error = useSelector(getError);
  // const visibleFilter = useSelector(getVisible);

  return (
    <div>
      {error ? (
        <h1 className="error">{error.message}</h1>
      ) : (
        <Section>
          <h1>Phonebook</h1>
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
