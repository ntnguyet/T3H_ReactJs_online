import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  render() {
    const {email, phone} = this.props;
    return (
      <div>
        <h4> Nguyệt Nhi</h4>
        <ul>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}
