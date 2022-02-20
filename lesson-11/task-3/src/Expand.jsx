import React from 'react';

class Expand extends React.Component {
  state = {
    isContent: false
  }
  
  toggle = () => {
    this.setState({
      isContent: !this.state.isContent,
    });
  }

  render() {
    const { title, children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={this.toggle} className="expand__toggle-btn">
            {this.state.isContent ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {this.state.isContent && children}
      </div>
    );
};
}
export default Expand;



