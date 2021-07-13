import React from 'react';
import '../Filter/Filter.scss';
class SelectRatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.isClicked);
    const { isClicked } = this.props; //

    console.log('컴포넌트렌더문', isClicked);

    return (
      <>
        <button
          type="button"
          dataIdx={this.props.dataIdx}
          key={this.props.dataIdx}
          onClick={e => this.props.checkSelectRating(e, this.props.dataIdx)}
          // style={{
          //   backgroundColor: isClicked ? '#fb7d27' : 'white',
          // }}
          className={isClicked ? 'pagingBtn on' : 'pagingBtn'}
          //className="star pagingBtn"
          name="star"
        >
          {this.props.title}
        </button>
      </>
    );
  }
}
export default SelectRatingComponent;
