const INITIAL_STATE = [
  {
    companyName: 'capsule corp',
    clientId: '1',
    email: 'something@something.com',
    visible: true,
  },
  {
    companyName: 'mandelorian',
    clientId: '2',
    email: 'somewhere@somewhere.org',
    visible: true,
  },
  {
    companyName: 'fellowship of the ring',
    clientId: '3',
    email: 'somehow@somehow.co.il',
    visible: true,
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
