import { combineReducers } from 'redux';
import { inputReducer } from './inputReducer';
import { contactReducer } from './contactsReducer';
import { filteredContactReducer } from './filteredContactsReducer';

export default combineReducers({
  contacts: contactReducer,
  filteredContacts: filteredContactReducer,
  input: inputReducer,
});
