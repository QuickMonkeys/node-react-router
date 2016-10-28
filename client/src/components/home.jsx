import React from 'react';

export default class Home extends React.Component {

  componentDidMount() {
    console.log('Home mounted.');
  }

  render() {
    return (<h3 style={{textAlign:'center'}}>Welcome to the react router example!</h3>);
  }
  
}