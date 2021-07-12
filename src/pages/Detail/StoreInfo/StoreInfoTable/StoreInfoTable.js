import React from 'react';

import './StoreInfoTable.scss';

class StoreInfoTable extends React.Component {
  render() {
    const { restaurantsData, foodsData } = this.props;

    return (
      <table className="storeInfoTable">
        <caption>매장 정보</caption>
        <tbody>
          <tr>
            <th>주소</th>
            <td>{restaurantsData.address}</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>{restaurantsData.phone_number}</td>
          </tr>
          <tr>
            <th>음식종류</th>
            <td>{restaurantsData.sub_category}</td>
          </tr>
          <tr>
            <th>가격대</th>
            <td>{parseInt(foodsData.average_price)}</td>
          </tr>
          <tr>
            <th>영업시간</th>
            <td>{restaurantsData.open_time}</td>
          </tr>
          {foodsData.foods.map((food, index) => (
            <tr className="menuInfo" key={food.id}>
              {index === 0 && (
                <th rowSpan={`${foodsData.foods.length}`}>메뉴</th>
              )}
              <td>{food.name}</td>
              <td>{Math.floor(food.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default StoreInfoTable;
