import React, { Component } from 'react';
import './PopStoreSection.scss';

class PopStoreSection extends React.Component {
  constructor() {
    super();
    this.state = {
      popStore: [],
    };
  }

  componentDidMount() {
    this.setState({ popStore: this.props.popStore });
  }
  render() {
    const { restaurant_name, rating, category, sub_category, image, address } =
      this.props;
    return (
      <section className="popStoreSection">
        <h2>평점이 높은 인기 식당</h2>
        <div className="popStoreListBox">
          <ul>
            <li className="popStore">
              <img className="popStoreImg" alt="식당사진" src={image} />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <h3 className="mainStoreName">{restaurant_name}</h3>
                  <span className="storeGrade">★ {rating}</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">
                    {category} - {sub_category}
                  </span>
                </div>
              </div>
            </li>
            <li className="popStore">
              <img
                className="popStoreImg"
                alt="식당사진"
                src="https://mp-seoul-image-production-s3.mangoplate.com/839/671720_1528772412240_82151?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
              />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <h3 className="mainStoreName">하얼빈</h3>
                  <span className="storeGrade">★ 4.5</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">선릉 - 중식/중화요리</span>
                </div>
              </div>
            </li>
            <li className="popStore">
              <img
                className="popStoreImg"
                alt="식당사진"
                src="https://mp-seoul-image-production-s3.mangoplate.com/338216/s7hlawose_yzkb.jpg?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
              />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <h3 className="mainStoreName">도스타코스</h3>
                  <span className="storeGrade">★ 4.6</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">선릉 - 멕시칸/타코</span>
                </div>
              </div>
            </li>
            <li className="popStore">
              <img
                className="popStoreImg"
                alt="식당사진"
                src="https://mp-seoul-image-production-s3.mangoplate.com/10636/33537_1454570126744_53616?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
              />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <h3 className="mainStoreName">소호정</h3>
                  <span className="storeGrade">★ 4.3</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">양재동 - 국수/면요리</span>
                </div>
              </div>
            </li>
            <li className="popStore">
              <img
                className="popStoreImg"
                alt="식당사진"
                src="https://mp-seoul-image-production-s3.mangoplate.com/192691_1427166322990?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
              />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <h3 className="mainStoreName">꺼벙이</h3>
                  <span className="storeGrade">★ 4.1</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">선릉/삼성 - 분식</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default PopStoreSection;
