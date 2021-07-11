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
            onClick={e =>
              this.props.updateResult(e, this.props.resultList.data.id)
            }
            data-index={this.props.resultList.data.id}
            style={{ backgroundColor: this.state.backgroundcolor }}
          >
            {this.props.resultList.data.id}
          </button>
        </span>
      </>
    );
  }
}
export default Button;
