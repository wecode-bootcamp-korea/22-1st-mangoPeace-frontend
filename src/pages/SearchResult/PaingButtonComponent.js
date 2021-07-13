import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isButtonClicked } = this.props;

    return (
      <>
        <span>
          <button
            type="button"
            className="pagingButton"
            onClick={e => this.props.updateResult(e, this.props.dataIndex)}
            dataIndex={this.props.dataIndex}
            className={isButtonClicked ? 'pagingButton on' : 'pagingButton'}
          >
            {this.props.dataIndex}
          </button>
        </span>
      </>
    );
  }
}
export default Button;
