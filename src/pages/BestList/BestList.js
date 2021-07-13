import React from 'react';

import BannerTitle from './BannerTitle/BannerTitle';
import BannerList from './BannerList/BannerList';

import './BestList.scss';

class BestList extends React.Component {
  constructor() {
    super();
    this.state = {
      storeList: [],
    };
  }

  // componentDidMount() {
  //   fetch('api 주소')
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ storeList: data.result });
  //     });
  // }
  render() {
    const { storeList } = this.state;
    console.log(storeList);

    return (
      <div className="bestList">
        <BannerTitle />
        <BannerList storeList={storeList} />
      </div>
    );
  }
}

export default BestList;
