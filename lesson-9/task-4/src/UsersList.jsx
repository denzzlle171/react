import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      usersArr: this.props.users,
    };

  }
  
  handleChange = (event) => {

    this.setState ({
      filterText: event.target.value,
    })
    
    const filtredArr = this.props.users
      .filter((user) => user.name.toLowerCase() === event.target.value.toLowerCase());
    
    const changeArr = !(this.state.filterText === '')
      ? filtredArr
      : this.props.users;
    
    this.setState({
      usersArr: changeArr,
    });
   
  };
  
  render() {

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={this.state.usersArr.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {this.state.usersArr.map((user) => (
            <User 
              key={user.id}
              name={user.name}
              age={user.age} />
          ))}
        </ul>
      </div>
    );

  }
}
export default UsersList;
