import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      
    };

  }
  
  handleChange = (event) => {

    this.setState ({
      filterText: event.target.value,
    })
    
  };
  
  render() {
    const { users } = this.props
    const {filterText} = this.state
    const userToDisplay = users
    .filter((user) => user.name.toLowerCase().includes(filterText));

    return (
      <div>
        <Filter
          filterText={filterText}
          count={userToDisplay.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {userToDisplay.map((user) => (
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
