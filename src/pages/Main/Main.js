import React from 'react';

import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="mainImgBar">
          <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
          <p>싸우지망고 🍋</p>
          <div className="mainSearchBar">
            <input
              className="mainSearchInput"
              type="text"
              placeholder="식당 또는 음식"
            />
            <i class="fas fa-search fa-lg" id="mainSearchIcon"></i>
            <button className="mainSearchBtn">검색</button>
          </div>
        </section>
        <section className="foodThemeListBox">
          <div className="topBar">
            <span className="listText">믿고 보는 맛집 리스트</span>
            <span className="listMore">
              <u>리스트 더보기</u>
            </span>
          </div>
          <div className="foodThemeBox">
            {/* <i class="fas fa-chevron-left fa-2x" id="arrowLeft"></i> */}
            <button className="arrowBtnLeft">
              <i class="fas fa-chevron-left fa-2x" id="arrowLeft"></i>
            </button>
            <ul className="foodThemeImgBox">
              <div className="foodThemeImg">
                <li>
                  <img alt="테마이미지" src="http://placehold.it/500x300" />
                </li>
                <li>
                  <img alt="테마이미지" src="http://placehold.it/500x300" />
                </li>
                <li>
                  <img alt="테마이미지" src="http://placehold.it/500x300" />
                </li>
              </div>
            </ul>
            <button className="arrowBtnRight">
              <i class="fas fa-chevron-right fa-2x" id="arrowRight"></i>
            </button>
            <ul className="slickDots">
              <li className="slickActive">
                <button className="dotBtn">
                  <i class="fas fa-circle fa-xs"></i>
                </button>
              </li>
              <li className="slickActive">
                <button className="dotBtn">
                  <i class="fas fa-circle fa-xs"></i>
                </button>
              </li>
            </ul>
          </div>
        </section>
        <section className="popStoreContainer">
          <div className="popTopBar">
            <span>평점이 높은 인기 식당</span>
          </div>
          <div className="popStoreListBox">
            <div className="popStore">
              <img
                className="popStoreImg"
                alt="식당사진"
                src="http://placehold.it/50x300"
              />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <span className="mainStoreName">디저티스트</span>
                  <span className="storeGrade">4.3</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">송파/가락 - 카페/디저트</span>
                </div>
              </div>
            </div>
            <div className="popStore">
              <img
                className="popStoreImg"
                alt="식당사진"
                src="http://placehold.it/50x300"
              />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <span className="mainStoreName">디저티스트</span>
                  <span className="storeGrade">4.3</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">송파/가락 - 카페/디저트</span>
                </div>
              </div>
            </div>
            <div className="popStore">
              <img
                className="popStoreImg"
                alt="식당사진"
                src="http://placehold.it/50x300"
              />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <span className="mainStoreName">디저티스트</span>
                  <span className="storeGrade">4.3</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">송파/가락 - 카페/디저트</span>
                </div>
              </div>
            </div>
            <div className="popStore">
              <img
                className="popStoreImg"
                alt="식당사진"
                src="http://placehold.it/50x300"
              />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <span className="mainStoreName">디저티스트</span>
                  <span className="storeGrade">4.3</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">송파/가락 - 카페/디저트</span>
                </div>
              </div>
            </div>
            <div className="popStore">
              <img
                className="popStoreImg"
                alt="식당사진"
                src="http://placehold.it/50x300"
              />
              <div className="popStoreInfoBox">
                <div className="topInfo">
                  <span className="mainStoreName">디저티스트</span>
                  <span className="storeGrade">4.3</span>
                </div>
                <div className="bottomInfo">
                  <span className="storeLocated">송파/가락 - 카페/디저트</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
