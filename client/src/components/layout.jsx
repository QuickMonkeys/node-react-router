import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li><Link to="users" activeClassName="active">Users</Link></li>
              <li><Link to="companies" activeClassName="active">Companies</Link></li>
            </ul>
          </div>
        </nav>
        <main>
          <div className="container">
          {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}