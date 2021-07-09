import React from 'react';
import './Filter.scss';

class Filter extends React.Component {
  render() {
    return (
      <>
        <div className="UpperBox">
          <div className="searchFilter">
            <div className="selectHead">
              <span className="title">검색필터</span>
              <span className="multipleChoice">중복 선택 불가능</span>
            </div>
            <div className="selectSection">
              <div className="rating">평점순</div>
              <div className="popularity">코멘트</div>
            </div>
          </div>
          <div className="priceForOnePerson">
            <div className="selectHead">
              <span className="title">가격/1인당</span>
              <span className="multipleChoice">중복 선택 불가능</span>
            </div>
            <div className="priceSelectSection">
              <span className="lessThan10000">만원이하</span>
              <span className="over10000">만원이상</span>
              <span className="over20000">2만원이상</span>
              <span className="over30000">3만원이상</span>
            </div>
          </div>

          <div className="menuCategory">
            <div className="selectHead">
              <span className="title">음식종류</span>
              <span className="multipleChoice">중복 선택 불가능</span>
            </div>
            <div className="western">
              <span className="selectWestern">양식</span>
              <span className="pizza">피자</span>
              <span className="pasta">파스타</span>
              <span className="hamburger">햄버거</span>
            </div>
            <div className="korean">
              <span className="selectKorean">한식</span>
              <span className="soup">국밥</span>
              <span className="barbeque">고기</span>
              <span className="noodle">국수</span>
            </div>
            <div className="japanese">
              <span className="selectJapanese">일식</span>
              <span className="sushi">스시</span>
              <span className="cutlet">돈가스</span>
              <span className="donburi">덮밥</span>
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
