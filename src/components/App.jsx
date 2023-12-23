import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./contactForm/contactForm";
import { Filter } from "./filter/filter";
import { ContactList } from "./contactList/contactList";


export class App extends Component{
  state = {
    contacts: [],
    filter: '',

  }
  
  changeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  formSubmit = (e, name, number) => {
    if (this.state.contacts.some(concat => concat.name === name)) {
      e.preventDefault()
      return alert(`${name}is already in contacts`)
    } else if (this.state.contacts.some(concat => concat.number === number)) {
      e.preventDefault()
      return alert(`${number}is already in contacts`)
    }e.preventDefault()
    this.setState(({ contacts }) => ({ contacts: [...contacts, { id: nanoid(), name: name, number: number }] }));
  }

  deleteContact = (e) => {
    
    const { id } = e.currentTarget
   
    this.setState(({ contacts }) => ({ contacts: contacts.filter(contact => contact.id !== id)}))
    console.log(this.state.contacts)

  }

  render() {
    const {contacts, filter} = this.state
    const filterObjects = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));  
    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm formSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter changeInput={this.changeInput} filter={filter} />
        <ContactList filterObjects={filterObjects} deleteContact={this.deleteContact} />


    </>
    );
  };
};
