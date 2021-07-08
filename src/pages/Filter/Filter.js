import React from 'react';
import './Filter.scss';

class Filter extends React.Component {
  render() {
    return (
      <>
        <div className="UpperBox">
          <div className="searhFilter">
            <div className="sectionHead">
              <span className="Title">검색필터</span>
              <span className="multipleChoice">중복선택불가능</span>
            </div>
            <span className="rating">평점순</span>
            <span className="popularity">코멘트</span>
          </div>
          <div className="priceForOnePerson">
            <div className="sectionHead">
              <span className="Title">가격/1인당</span>
              <span className="multipleChoice">중복선택불가능</span>
            </div>
            <span className="<10000">만원이하</span>
            <span className="10000_">만원이상</span>
            <span className="20000_">2만원이상</span>
            <span className="30000_">3만원이상</span>
          </div>

          <div className="menuCategory">
            <div className="sectionHead">
              <span className="Title">음식종류</span>
              <span className="multipleChoice">중복 선택 불가능</span>
            </div>
            <div className="western">
              <span className="pizza">피자</span>
              <span className="pasta">파스타</span>
              <span className="hamburger">햄버거</span>
            </div>
            <div className="korean">
              <span className="soup">스프</span>
              <span className="barbeque">바베큐</span>
              <span classsName="noodle">국수</span>
            </div>
            <div className="japanese">
              <span className="sushi">스시</span>
              <span className="cutlet">돈가스</span>
              <span className="donburi">덮밥</span>
            </div>
          </div>
          <div className="cancelOrConfirm">
            <span className="cancel">취소</span>
            <span className="confirm">선택</span>
          </div>
        </div>
      </>
    );
  }
}

export default Filter;
