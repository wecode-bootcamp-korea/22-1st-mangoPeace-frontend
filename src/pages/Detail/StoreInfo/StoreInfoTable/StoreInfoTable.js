import React from 'react';

import './StoreInfoTable.scss';

class StoreInfoTable extends React.Component {
  render() {
    return (
      <table className="storeInfoTable">
        <caption>매장 정보</caption>
        <tbody>
          <tr>
            <th>주소</th>
            <td>서울특별시 마포구 독막로9길 6</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>02-322-9896</td>
          </tr>
          <tr>
            <th>음식종류</th>
            <td>이탈리안</td>
          </tr>
          <tr>
            <th>가격대</th>
            <td>만원 미만</td>
          </tr>
          <tr>
            <th>주차</th>
            <td>주차공간없음</td>
          </tr>
          <tr>
            <th>영업시간</th>
            <td>월-토: 12:00 - 22:00</td>
          </tr>
          <tr className="menuInfo">
            <th rowSpan="2">메뉴</th>
            <td>페퍼로니피자</td>
            <td>18,000원</td>
          </tr>
          <tr className="menuInfo">
            <td>슈퍼슈프림</td>
            <td>21,000원</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default StoreInfoTable;
