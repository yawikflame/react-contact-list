import React from 'react';
import { getContacts } from '../actions';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';

class ContactList extends React.Component {
  componentDidMount() {
    this.props.getContacts(this.props.contacts);
  }

  renderList() {
    return this.props.filteredContacts.map((contact) => {
      return (
        <ContactItem
          email={contact.email}
          companyName={contact.companyName}
          id={contact.clientId}
          key={contact.clientId}
        />
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { filteredContacts: state.filteredContacts, contacts: state.contacts };
};

export default connect(mapStateToProps, { getContacts })(ContactList);
