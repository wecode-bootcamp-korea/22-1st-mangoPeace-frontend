import React, { Component } from 'react';
import './BestListImg.scss';

class BestListImg extends Component {
  render() {
    const { bannerImg } = this.props;

    return (
      <li>
        <img alt="테마이미지" src={bannerImg} />
        <h3>파스타 맛집 베스트 30곳</h3>
        <h4>"비 오는 날은 파전에 막걸리지"</h4>
      </li>
    );
  }
}

export default BestListImg;
