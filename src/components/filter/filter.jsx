import { Component } from "react"


export class Filter extends Component{
    render() {
        return <label>
            Find contact by Name
            <input type="text" name="filter" required onChange={e => this.props.changeInput(e)} value={this.props.filter} />
        </label>
    }
}