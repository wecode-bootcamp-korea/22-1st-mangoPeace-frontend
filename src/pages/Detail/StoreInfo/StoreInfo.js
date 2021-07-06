import React from 'react';

import StoreHeader from './StoreHeader/StoreHeader';

import './StoreInfo.scss';
import StoreInfoTable from './StoreInfoTable/StoreInfoTable';

class StoreInfo extends React.Component {
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

export default StoreInfo;
