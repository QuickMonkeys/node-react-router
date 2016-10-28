import React from 'react';

import Search from './search.jsx';
import HighLight from './highlight.jsx';

import { orderBy, filterBy } from '../lib/lib.js';

export default class Users extends React.Component {

    constructor() {
        super();
        this.state = {data: [], filterText: ''};
        
        this.handleChange = this.handleChange.bind(this);
    }
    
   componentDidMount() {
        console.log('Companies - componentDidMount');

        // An ajax can be used here to access the data, by a rest API service
        const data = orderBy(require("json!../data/companies.json"), 'name');
        this.setState({ data: data });
    }

   handleChange(text) {
        this.setState({filterText: text });
    }
    
    row(item, filterText) {
        return (<tr onClick={() => alert('Some action...')} key={item.id} className="table-row">
                    <td><HighLight text={item.name} match={filterText} /></td>
                    <td><HighLight text={item.city} match={filterText} /></td>
                    <td><HighLight text={item.country} match={filterText} /></td>
                    <td><HighLight text={item.email} match={filterText} /></td>
                </tr>);
    }
    
    table(data) {
        const filterText = this.state.filterText;
        const rows = data.map( (m) => this.row(m, filterText) );

        return (
            <table className="table">
                <thead>
                    <tr><th>Name</th><th>City</th><th>Country</th><th>Email</th></tr>
                </thead>
                <tbody>
                    {rows.length == 0 
                        ? <tr><td colSpan="4" style={{textAlign:'center'}}>Well... Nothing to show here based on your search.</td></tr>
                        : rows}
                </tbody>
            </table>
        );
    }

    render() {
        const {data, filterText } = this.state;
        const filtered = data.filter( (f) => filterBy(f, ['name', 'city', 'country', 'email'], filterText) );
        
        const searchProps = {
            handleChange: this.handleChange.bind(this),
            total: data.length,
            filtered: filtered.length
        }
        
        return (
            <div className="list">
                <Search {...searchProps}/>
                <div className="list-items">
                {this.table(filtered)}
                </div>
            </div>
        );
    }
}