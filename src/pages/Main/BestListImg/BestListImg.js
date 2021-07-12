import React, { Component } from 'react';
import './BestListImg.scss';

class BestListImg extends Component {
  bannerText = [
    {
      headLine: '피자',
      subLine: '주름피자 어깨피자 웃음피자',
    },
    {
      headLine: '파스타',
      subLine: '오늘 점심은 파스타 어떠신가요?',
    },
    {
      headLine: '햄버거',
      subLine: '부실한 패스트푸드는 이제 그만!',
    },
    {
      headLine: '국밥',
      subLine: '한국인은 국밥이지!',
    },
    {
      headLine: '숯불구이',
      subLine: '구석구석 맛집으로 가득한 이 곳!',
    },
    {
      headLine: '면요리',
      subLine: '더운 여름엔 이열치열 잔치국수!',
    },
    {
      headLine: '초밥',
      subLine: '속이 더부룩할 땐 깔끔한 스시!',
    },
    {
      headLine: '돈까스',
      subLine: '돼지는 튀길수록 맛있엉!',
    },
    {
      headLine: '덮밥',
      subLine: '점심엔 덮밥요리로 깔끔한 한끼~',
    },
  ];

  render() {
    const { bannerImg } = this.props;
    console.log(bannerImg);

    return (
      <>
        {this.bannerText.map((text, index) => (
          <li>
            <img alt="테마이미지" src={bannerImg[index].image} />
            <h3>{text.headLine} 맛집 베스트 5곳</h3>
            <h4>"{text.subLine}"</h4>
          </li>
        ))}
      </>
    );
  }
}

export default BestListImg;
