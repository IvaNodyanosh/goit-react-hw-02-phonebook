import { Component } from "react"

export class ContactList extends Component {

    render() {
        
        return <ul>
            {this.props.filterObjects.map(({id, number, name }) => <li key={id}><p>{name}: {number}</p><button id={id} onClick={e => this.props.deleteContact(e)} type="button">Delete</button></li> )}
        </ul>
    }
}