import React from 'react';
import ContactList from './ContactList';
import { getContacts, inputChange, filterContacts } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {
  onInputChange = (event) => {
    this.props.inputChange(event.target.value);
    this.props.filterContacts(this.props.contacts, this.props.input);
  };

  render() {
    return (
      <div
        className="ui two column centered grid"
        style={{ marginTop: '10px' }}
      >
        <div className="column">
          <div className="ui three column centered grid">
            <div className="column">
              <div className="ui left icon input">
                <input
                  value={this.props.input}
                  onChange={this.onInputChange}
                  placeholder="Search contact..."
                ></input>
                <i className="users icon"></i>
              </div>
            </div>
          </div>
          <ContactList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { input: state.input, contacts: state.contacts };
};

export default connect(mapStateToProps, {
  getContacts,
  inputChange,
  filterContacts,
})(App);
