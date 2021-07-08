import React from 'react';

import StoreHeader from './StoreHeader/StoreHeader';
import StoreInfoTable from './StoreInfoTable/StoreInfoTable';

import './StoreInfo.scss';

/*global kakao*/

class StoreInfo extends React.Component {
  componentDidMount = () => {
    this.initMap();
  };

  initMap = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_APP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementsByClassName('storeLocation')[0];
        const options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new kakao.maps.LatLng(37.506502, 127.053617);
        const marker = new kakao.maps.Marker({
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
          <div className="storeLocation"></div>
        </div>
      </div>
    );
  }
}

const API_APP_KEY = 'ab48646716f052ca07bb18f252c48472';

export default StoreInfo;
