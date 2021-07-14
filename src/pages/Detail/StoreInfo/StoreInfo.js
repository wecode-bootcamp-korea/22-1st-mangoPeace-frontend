import React from 'react';

import StoreHeader from './StoreHeader/StoreHeader';
import StoreInfoTable from './StoreInfoTable/StoreInfoTable';
import StoreLocation from './StoreLocation/StoreLocation';

import './StoreInfo.scss';

class StoreInfo extends React.Component {
  splitCoordinate = coordinate => {
    const result = coordinate.split(',');
    const lat = parseFloat(result[0]);
    const lng = parseFloat(result[1].slice(1));

    return [lat, lng];
  };

  render() {
    const { restaurantsData, foodsData, storeId, fetchData } = this.props;

    return (
      <div className="storeInfo">
        <StoreHeader
          storeId={storeId}
          fetchData={fetchData}
          restaurantsData={restaurantsData}
        />
        <div className="storeInfoBottom">
          <StoreInfoTable
            restaurantsData={restaurantsData}
            foodsData={foodsData}
          />
          <StoreLocation
            storeCoordinate={this.splitCoordinate(restaurantsData.coordinate)}
          />
        </div>
      </div>
    );
  }
}

const API_APP_KEY = 'ab48646716f052ca07bb18f252c48472';

export default StoreInfo;
