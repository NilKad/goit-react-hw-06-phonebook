// import { useEffect, useRef } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter, add, del } from 'redux/phonebookSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contactsList);
  const filter = useSelector(state => state.filterContact.filter);

  const addToPhonebook = ({ id, name, number }) => {
    if (contacts.find(el => el.name === name)) {
      alert(`${name} is arledy is contacts`);
      return false;
    }
    dispatch(add({ id, name, number }));
    return true;
  };

  const filteredContactList = () => {
    return contacts.filter(f => {
      return f.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const onInputFilterHandle = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  const deletePhonebookID = id => {
    dispatch(del(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddPhonebook={addToPhonebook} />
      <h2>Contacts</h2>
      <Filter onInputHandle={onInputFilterHandle} filterValue={filter} />
      <ContactList
        onDeletePhonebookID={deletePhonebookID}
        contactList={filteredContactList()}
      />
    </div>
  );
};
