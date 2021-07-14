import React from 'react';

import './StoreLocation.scss';

/*global kakao*/

class StoreLocation extends React.Component {
  componentDidMount = () => {
    const { storeCoordinate } = this.props;

    this.initMap(storeCoordinate[0], storeCoordinate[1]);
  };

  initMap = (lat, lng) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_APP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementsByClassName('storeLocation')[0];
        const options = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new kakao.maps.LatLng(lat, lng);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  };

  render() {
    return <div className="storeLocation"></div>;
  }
}

const API_APP_KEY = 'ab48646716f052ca07bb18f252c48472';

export default StoreLocation;
