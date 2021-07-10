import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.updatePage = this.updatePage.bind(this);
  }
  render() {
    return (
      <>
        <button
          type="button"
          className="paging"
          onClick={this.updatePage}
          currentindex={this.props.currentidx}
          style={{ backgroundColor: this.props.backgroundcolor }}
        >
          1
        </button>
      </>
    );
  }
}
export default Button;
