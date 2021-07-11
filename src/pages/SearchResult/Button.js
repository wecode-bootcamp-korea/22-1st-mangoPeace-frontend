import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <>
        <span>
          <button
            type="button"
            className="paging"
            onClick={e => this.props.updateResult(e, idx)}
            data-index={idx}
            style={{ backgroundColor: this.state.backgroundcolor }}
          >
            {idx}
          </button>
        </span>
      </>
    );
  }
}
export default Button;
