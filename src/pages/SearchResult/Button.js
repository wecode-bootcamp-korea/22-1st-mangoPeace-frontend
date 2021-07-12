import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isButtonClicked } = this.props;
    //console.log(isButtonClicked);
    return (
      <>
        <span>
          <button
            type="button"
            className="paging"
            onClick={e => this.props.updateResult(e, this.props.dataIndex)}
            dataIndex={this.props.dataIndex}
            style={{ backgroundColor: isButtonClicked ? 'red' : 'blue' }}
          >
            {this.props.dataIndex}
          </button>
        </span>
      </>
    );
  }
}
export default Button;
