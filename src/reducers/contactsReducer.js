const INITIAL_STATE = [
  {
    companyName: 'capsule corp',
    clientId: '1',
    email: 'something@something.com',
  },
  {
    companyName: 'mandelorian',
    clientId: '2',
    email: 'somewhere@somewhere.org',
  },
  {
    companyName: 'fellowship of the ring',
    clientId: '3',
    email: 'somehow@somehow.co.il',
  },
  {
    companyName: 'blue man group',
    clientId: '4',
    email: 'mehow@how.co.il',
  },
  {
    companyName: 'daft punk',
    clientId: '5',
    email: 'somew@some.co.il',
  },
  {
    companyName: 'strawberries inc',
    clientId: '6',
    email: 'how@so.co.il',
  },
];

export const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return action.payload;

    default:
      return state;
  }
};
