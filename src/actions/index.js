export const getContacts = (contacts) => {
  inputChange('');
  filterContacts(contacts, '');
  return {
    type: 'GET_CONTACTS',
    payload: contacts,
  };
};

export const filterContacts = (contacts, input) => {
  return {
    type: 'FILTER_CONTACTS',
    payload: contacts,
    input: input,
  };
};

export const inputChange = (input) => {
  return {
    type: 'INPUT_CHANGE',
    payload: input,
  };
};
