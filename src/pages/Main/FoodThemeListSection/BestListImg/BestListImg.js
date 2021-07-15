import React, { Component } from 'react';
import './BestListImg.scss';
import { bannerText } from '../../bannerText';

class bestListImg extends Component {
  render() {
    const { bestListImg } = this.props;

    return (
      <>
        {bannerText.map((text, index) => (
          <li key={text.textId} className="bannerList">
            <img alt="테마이미지" src={bestListImg[index].image} />
            <h3>{text.headLine} 맛집 베스트 5곳</h3>
            <h4>"{text.subLine}"</h4>
          </li>
        ))}
      </>
    );
  }
}

export default bestListImg;
