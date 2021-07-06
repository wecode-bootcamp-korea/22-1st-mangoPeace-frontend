import React from 'react';

import StoreHeader from './StoreHeader/StoreHeader';

import './StoreInfo.scss';
import StoreInfoTable from './StoreInfoTable/StoreInfoTable';

/*global kakao*/

class StoreInfo extends React.Component {
  componentDidMount = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=c8a2fd588fc9dd0ed0c0e8f79133a389&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById('storeLocation');
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 4,
        };

        const map = new window.kakao.maps.Map(container, options);

        let markerPosition = new kakao.maps.LatLng(37.506502, 127.053617);

        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  };

  render() {
    return (
      <div className="storeInfo">
        <StoreHeader />
        <div className="storeInfoBottom">
          <StoreInfoTable />
          <div id="storeLocation"></div>
        </div>
      </div>
    );
  }
}

export default StoreInfo;
