import React from 'react';

import Cards from './cards.jsx';
import Search from './search.jsx';

import { orderBy, filterBy } from '../lib/lib.js';

export default class Users extends React.Component {

    constructor() {
        super();
        // The initial state is configured in the component constructor.
        // Once the component is rendered, the componentDidMount callback function is executed.
        this.state = {data: [], filtered: [], filterText: ''};
    }

    componentDidMount() {
        console.log('Users - componentDidMount');

        // An ajax can be used here to access the data, by a rest API service
        const data = orderBy(require("json!../data/users.json"), 'last_name');

        this.setState({ data: data, filtered: data });
    }    
    
    handleChange(text) {
        this.setState({ filterText: text });
    }
    
    handleClick() {
        alert('Some action...');
    }

    render() {
        const {data, filterText } = this.state;
        const filtered = data.filter( (f) => filterBy(f, ['first_name', 'last_name'], filterText) );
        
        const searchProps = {
            handleChange: this.handleChange.bind(this),
            total: data.length,
            filtered: filtered.length
        }
        
        const cardProps = {
            handleClick: this.handleClick.bind(this),
            data: filtered
        }

        return (
            <div>
                <Search {...searchProps}/>
                <Cards  {...cardProps}/>
            </div>
        );
    }
}