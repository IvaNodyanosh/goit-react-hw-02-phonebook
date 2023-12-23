import { Component } from "react";

export class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    }

    changeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    formReset = () => {
        this.setState( { name: '', number: '' } )
    }

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={e => { this.props.formSubmit(e, this.state.name, this.state.number); this.formReset()}}>
        <label>
          Name
          <input type="text" name="name" required onChange={e => this.changeInput(e)} value={name}/>
        </label>
        <label>
          Number
          <input type="tel" name="number" required onChange={e => this.changeInput(e)} value={number}/>
        </label>
        <button type="submit">Add contact</button>
        

        
      
      
      </form>
        )
    }

}