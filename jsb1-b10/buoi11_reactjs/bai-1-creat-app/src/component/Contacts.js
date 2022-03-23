import React, { Component } from 'react'

export default class Contacts extends Component {
    constructor(props){ //giá trị khởi tạo ban đầu
        super(props);
        this.state = { //khai báo 1 đối tượng ban đầu
            contacts: [
                {
                    id: 1,
                    name: "nguyet",
                    email: "nguyet@gmail.com",
                    phone: "1998 9989 999"
                },
                {
                    id: 2,
                    name: "lan",
                    email: "lan@gmail.com",
                    phone: "1998 9989 8888"
                },
                {
                    id: 3,
                    name: "thuy",
                    email: "thuy@gmail.com",
                    phone: "1998 9989 777"
                },
                {
                    id: 4,
                    name: "mai",
                    email: "mai@gmail.com",
                    phone: "1998 9989 666"
                },
                {
                    id: 5,
                    name: "tu",
                    email: "tu@gmail.com",
                    phone: "1998 9989 444"
                }
            ]
        }
    }     
  render() {
      //gọi state
      const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => 
            <h1>{contact.name}</h1>
        )}
      </div>
    )
  }
}
