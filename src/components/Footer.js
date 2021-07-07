import React from 'react';

import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerInner">
          <section className="footerLeft">
            <span className="logoTitle">싸우지망고</span>
            <ul className="enterInfo">
              <li>(주) 싸우지망고컴퍼니</li>
              <li>서울특별시 강남구 테헤란로 427 위워크타워 3층</li>
              <li>대표이사: 정빛열음</li>
              <li>사업자 등록번호: 608-1121-120</li>
              <li>통신판매업 신고번호: 0106-망고나라-0521</li>
            </ul>
            <span>© 2021 MangoPeace Co., Ltd. All rights reserved.</span>
          </section>
          <section className="footerRight">
            <ul className="footerUl">
              <li className="dev">Front</li>
              <li>이경민 이의연 정빛열음</li>
              <li className="dev">Back</li>
              <li>이원석 이지훈 최준영</li>
            </ul>
            <ul className="footerUl">
              <li>회사소개</li>
              <li>싸우지망고 채용</li>
              <li>투자정보</li>
              <li>브랜드 가이드라인</li>
              <li>싸우지망고 비즈니스</li>
              <li>광고 문의</li>
            </ul>
            <ul className="footerUl">
              <li>공지사항</li>
              <li>이용약관</li>
              <li>비회원 이용자 이용정책</li>
              <li>개인정보처리방침</li>
            </ul>
            <ul className="footerUl">
              <li>위치기반서비스 이용약관</li>
              <li>커뮤니티 가이드라인</li>
              <li>청소년보호정책</li>
              <li>홀릭 소개</li>
              <li>문의하기</li>
            </ul>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
