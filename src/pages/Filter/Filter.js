import React from 'react';
import './Filter.scss';

class Filter extends React.Component {
  render() {
    const { storyModal } = this.props;

    componentDidMount() {
      body.setAttribute("style", "overflow: hidden;"); // body 태그에 overflow hidden 값을 주어서 scroll 되지 않도록 함.
      this.setState({ status: true });
    }

    componentWillUnmount() {
      body.removeAttribute("style"); // 모달창이 종료되 될 때 body 태그에 준 속성을 제거 해준다.
      this.setState({ status: false });
    }
    return (
      <>
        <div className="UpperBox">
          <div className="searchFilter">
            <div className="selectHead">
              <span className="title">검색필터</span>
            </div>
            <div className="selectSection">
              <div className="rating">평점순</div>
              <div className="popularity">코멘트순</div>
            </div>
          </div>
          <div className="priceForOnePerson">
            <div className="selectHead">
              <span className="title">가격/1인당</span>
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
            </div>
            <div className="western">
              <span className="pizza">피자</span>
              <span className="pasta">파스타</span>
              <span className="hamburger">햄버거</span>
            </div>
            <div className="korean">
              <span className="soup">국밥</span>
              <span className="barbeque">고기</span>
              <span className="noodle">국수</span>
            </div>
            <div className="japanese">
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
