import React from 'react';

import BannerTitle from './BannerTitle/BannerTitle';
import BannerList from './BannerList/BannerList';

import './BestList.scss';

class BestList extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      storeList: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.3.102:8000/restaurants/top-list?filtering=ordering')
      .then(res => res.json())
      .then(data => {
        this.setState({ storeList: data.result });
      });
  }

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
