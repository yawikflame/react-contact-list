export const filteredContactReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_CONTACTS':
      return action.payload.filter(
        (contact) => contact.companyName.indexOf(action.input) !== -1
      );

    default:
      return state;
  }
};
