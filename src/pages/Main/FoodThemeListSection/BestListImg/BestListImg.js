import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bannerText } from '../../bannerText';
import './BestListImg.scss';

class BestListImg extends Component {
  goToBestList = id => {
    this.props.history.push(`/bestlist/${id}`);
  };

  render() {
    const { bestListImg } = this.props;

    return (
      <>
        {bannerText.map((text, index) => (
          <li
            key={text.textId}
            className="bannerList"
            onClick={() => this.goToBestList(text.textId)}
          >
            <img alt="테마이미지" src={bestListImg[index].image} />
            <h3>{text.headLine} 맛집 베스트 5곳</h3>
            <h4>"{text.subLine}"</h4>
          </li>
        ))}
      </>
    );
  }
}

export default withRouter(BestListImg);
