import React, {Component} from "react";

const Context = React.createContext();
export class Provider extends Component{
    state = {
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
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context