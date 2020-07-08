import React from 'react';
import { connect } from 'react-redux';

class ContactItem extends React.Component {
  render() {
    return (
      <div className="item">
        <i className="large user middle aligned icon"></i>
        <div className="content">
          <div className="content">
            <h1 className="header">{this.props.companyName}</h1>
            <div className="description">
              <p>{`client number: ${this.props.id} email: ${this.props.email}`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(ContactItem);
