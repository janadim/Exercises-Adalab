import React from "react";

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'info'
    };
    this.handleInput = this.handleInput.bind(this);
  }

    handleInput() {
      this.setState((prevState, props) => {
        let nextStyling;
        if (prevState.styling === 'info') {
          nextStyling = 'danger';
        } else {
          nextStyling = 'info';
        }
  
        return {
          styling: nextStyling
          
        };
      });
    };
  render() {


    return (
        <>
        <input
        type="text"${this.state.styling}
        onChange={this.handleInput}
      >
        {this.props.label}
      </input>
          <input type="text"></input>
          <p></p>
        </>
        
      
    );
  }
}

export default MediaCard;