import React, { useContext, useRef, useEffect } from 'react';
import contactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext1 = useContext(contactContext);
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext1;

  useEffect(() => {
    if (filtered === null) text.current.value = '';
  });

  const onchange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onchange}
      />
    </form>
  );
};

export default ContactFilter;
