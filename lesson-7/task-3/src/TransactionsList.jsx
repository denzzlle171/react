import React, { Component } from "react";
import Transaction from './Transaction';

class TransactionsList extends Component {
 

  render() {

   

    return (
      <ul className="transactions">
        {this.props.transactions.map((listItem) => (
          <Transaction key={listItem.id} {...listItem} />
        ))}
      </ul>
    );
  }
}
export default TransactionsList;
//key={this.props.transactions.id