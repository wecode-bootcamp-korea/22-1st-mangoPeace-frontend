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

  componentDidMount = () => {
    const { id } = this.props.match.params;

    fetch(
      `${BASE_URL}/restaurants?ordering=average_rating&sub_category_id=${id}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ storeList: data.result });
      });
  };

  render() {
    const { storeList } = this.state;

    return (
      <div className="bestList">
        <BannerTitle />
        {storeList.length !== 0 && <BannerList storeList={storeList} />}
      </div>
    );
  }
}

export default BestList;
