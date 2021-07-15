import React from 'react';

import BannerTitle from './BannerTitle/BannerTitle';
import BannerList from './BannerList/BannerList';
import { BASE_URL } from '../../config';
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
    fetch(`${BASE_URL}/restaurants?ordering=average_rating&sub_category_id=1`)
      .then(res => res.json())
      .then(data => {
        this.setState({ storeList: data.result });
      });
  }

  render() {
    const { storeList } = this.state;

    return (
      <div className="bestList">
        <BannerTitle />
        <BannerList storeList={storeList} />
      </div>
    );
  }
}

export default BestList;
