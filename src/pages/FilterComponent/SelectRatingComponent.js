import React from 'react';

class SelectRatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.isClicked); // 멥에서 아무것도 안하고 그냥 넘어옴 ..
    const { isClicked } = this.props; //
    // console.log(this.props.title);

    console.log('컴포넌트렌더문', isClicked);
    //     //첫 버튼 필터렌더 false
    // SelectRatingComponent.js:12 컴포넌트렌더문 true
    // SelectRatingComponent.js:12 컴포넌트렌더문 false//고정값
    //두번쨰;필터렌더 true
    // SelectRatingComponent.js:12 컴포넌트렌더문 false
    // SelectRatingComponent.js:12 컴포넌트렌더문 true

    return (
      <>
        <button
          type="button"
          dataIdx={this.props.dataIdx}
          key={this.props.dataIdx}
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
