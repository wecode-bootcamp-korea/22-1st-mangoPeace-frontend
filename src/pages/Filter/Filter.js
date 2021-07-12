import React from 'react';
import './Filter.scss';
import SelectRatingComponent from '../FilterComponent/SelectRatingComponent';

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      dataIdx: null,
      currentId: 1,
      idx: 1,
    };
  }
  //문제점 - 둘이 돌아가면서 색상이 변화 , 무조건 선택해야하는 상황- 음식종류에 적용하기
  //강의 마저 보기
  //두번 눌러도 색 그대로인 이유 - 한번 누를떄 컴포넌트 렌더 두번 일어남
  checkSelectRating = (e, currentidx) => {
    // if (e.target.name === 'star')
    //   this.setState({
    //     isClicked: !this.state.isClicked,
    //     currentId: currentidx,
    //   });
    // else if (e.target.name === 'popularity') {
    //   this.setState({
    //     isClicked: !this.state.isClicked,
    //     currentId: currentidx,
    //   });
    // }
    console.log(`currentidx`, currentidx);
    this.setState({
      currentId: currentidx,
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    // const array1 = ['별점순', '코멘트순'];
    const array1 = [1, 2];
    console.log('필터렌더', this.state.isClicked);

    return (
      <>
        <div className="UpperBox">
          <div className="searchFilter">
            <div className="selectHead">
              <span className="title">검색필터</span>
            </div>
            <div className="selectRating">
              {array1.map(idx => {
                console.log('맵', this.state.isClicked);
                return (
                  <SelectRatingComponent
                    title={array1[idx]}
                    dataIdx={idx}
                    key={idx}
                    checkSelectRating={this.checkSelectRating}
                    isClicked={
                      this.state.currentId === idx && !this.state.isClicked
                    }
                    // this.state.currentId === idx
                  />
                );
              })}
            </div>
          </div>
          <div className="priceForOnePerson">
            <div className="selectHead">
              <span className="title">가격/1인당</span>
            </div>
            <div className="priceSelectSection">
              <button className="lessThan10000">만원이하</button>
              <button className="over10000">만원이상</button>
              <button className="over20000">2만원이상</button>
              <button className="over30000">3만원이상</button>
            </div>
          </div>

          <div className="menuCategory">
            <div className="selectHead">
              <span className="title">음식종류</span>
            </div>
            <div className="western">
              <button className="pizza">피자</button>
              <button className="pasta">파스타</button>
              <button className="hamburger">햄버거</button>
            </div>
            <div className="korean">
              <button className="soup">국밥</button>
              <button className="barbeque">고기</button>
              <button className="noodle">국수</button>
            </div>
            <div className="japanese">
              <button className="sushi">스시</button>
              <button className="cutlet">돈가스</button>
              <button className="donburi">덮밥</button>
            </div>
          </div>
          <div className="cancelOrConfirm">
            <div className="cancel">취소</div>
            <div className="confirm">선택</div>
          </div>
        </div>
      </>
    );
  }
}

export default Filter;
