import React from 'react';

class SelectRatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isClicked } = this.props;
    console.log(this.props.title);
    console.log('컴포넌트렌더문', isClicked); //계속 false
    return (
      <>
        <button
          type="button"
          dataIdx={this.props.dataIdx}
          onClick={e => this.props.checkSelectRating(e, this.props.dataIdx)}
          style={{
            backgroundColor: isClicked ? '#fb7d27' : 'white',
          }}
          className="star"
          name="star"
        >
          {this.props.title}
        </button>
      </>
    );
  }
}
export default SelectRatingComponent;
