import React from 'react';

class BestList extends React.Component {
  render() {
    return (
      <div className="bestList">
        <section className="titleBox">
          <span className="views">161,311 클릭 | 2021-07-08</span>
          <h1>파전 맛집 베스트 30곳</h1>
          <h2>"비오는 날은 파전에 막걸리지"</h2>
        </section>
        <section className="listBox">
          <ul className="storeList">
            <li className="storeCard">
              <img
                className="storeImg"
                alt="누룩나무"
                src="https://mp-seoul-image-production-s3.mangoplate.com/17447_1568135250382451.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
              />
              <div className="storeInfoBox">
                <div className="storeInfo"></div>
                <h1>1. 누룩나무</h1>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default BestList;
