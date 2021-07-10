import React from 'react';

import './Main.scss';

//슬라이드 갯수
const totalSlide = 3;
const slideWidth = 1500;

class Main extends React.Component {
  state = {
    slideNum: 1,
    slideTranslate: 0,
  };

  //CDM 사용
  //const foo = () => { fetch(`${cartAPI}/quantity`) .then((res) => res.json()) };

  // componentDidMount() {
  //   fetch('api주소(localhost/ 다음부터');
  // }

  handleBtn = e => {
    const { slideNum, slideTranslate } = this.state;

    if (e.target.attributes.id.value === 'arrowRight') {
      this.setState({
        slideNum: slideNum + 1,
        slideTranslate: slideTranslate - slideWidth,
      });
    } else {
      this.setState({
        slideNum: slideNum - 1,
        slideTranslate: slideTranslate + slideWidth,
      });
    }
  };

  handleDotBtn = e => {
    const { slideNum, slideTranslate } = this.state;
    const gap = e.target.attributes.index.value - slideNum;

    this.setState({
      slideNum: parseInt(e.target.attributes.index.value),
      slideTranslate: slideTranslate - slideWidth * gap,
    });
  };

  render() {
    const { handleBtn, handleDotBtn } = this;
    const { slideNum, slideTranslate } = this.state;

    return (
      <main>
        <section className="mainImgBar">
          <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
          <p>싸우지망고 🥭</p>
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
            <h2 className="listText">믿고 보는 맛집 리스트</h2>
            <span className="listMore">
              <u>리스트 더보기</u>
            </span>
          </div>
          <div className="foodThemeBox">
            <button
              className={slideNum > 1 ? 'arrowBtnLeft' : 'none'}
              onClick={handleBtn}
            >
              <i class="fas fa-chevron-left fa-3x" id="arrowLeft"></i>
            </button>
            <ul className="foodThemeImgBox">
              <div
                className="foodThemeImg"
                style={{
                  transform: `translateX(${slideTranslate}px)`,
                }}
              >
                <li>
                  <img
                    alt="테마이미지"
                    src="https://images.unsplash.com/photo-1616299915952-04c803388e5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1914&q=80"
                  />
                  <h3>파스타 맛집 베스트 30곳</h3>
                  <h4>"비 오는 날은 파전에 막걸리지"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  />
                  <h3>초밥 맛집 베스트 30곳</h3>
                  <h4>"구석구석 맛집으로 가득한 이 곳!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                  />
                  <h3>햄버거 맛집 베스트 15곳</h3>
                  <h4>"부실한 패스트푸드는 이제 그만!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://cdn.crowdpic.net/list-thumb/thumb_l_6629C59D818BCAAAA0560AC2F53E7FAE.jpg"
                  />
                  <h3>덮밥 맛집 베스트 2곳</h3>
                  <h4>"비 오는 날은 파전에 막걸리지"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                  />
                  <h3>피자 맛집 베스트 10곳</h3>
                  <h4>"구석구석 맛집으로 가득한 이 곳!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="http://www.busan.com/nas/wcms/wcms_data/photos/2019/10/31/2019103120003838156_l.jpg"
                  />
                  <h3>국밥 맛집 베스트 15곳</h3>
                  <h4>"부실한 패스트푸드는 이제 그만!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="http://recipe.gabia.io/pds/upfile/2020-08-20_620177542[4].jpg"
                  />
                  <h3>면요리 맛집 베스트 3곳</h3>
                  <h4>"비 오는 날은 파전에 막걸리지"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://contents.lotteon.com/itemimage/LO/12/88/67/99/51/_1/28/86/79/95/2/LO1288679951_1288679952_1.jpg/dims/resizef/720X720"
                  />
                  <h3>돈까스 맛집 베스트 30곳</h3>
                  <h4>"구석구석 맛집으로 가득한 이 곳!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="http://www.nbn-news.co.kr/news/photo/201911/43932_43163_599.jpg"
                  />
                  <h3>숯불구이 맛집 베스트 15곳</h3>
                  <h4>"부실한 패스트푸드는 이제 그만!"</h4>
                </li>
              </div>
            </ul>
            <button
              className={slideNum < totalSlide ? 'arrowBtnRight' : 'none'}
              onClick={handleBtn}
            >
              <i class="fas fa-chevron-right fa-3x" id="arrowRight"></i>
            </button>
            <ul className="slickDots">
              <li className="slickActive">
                <i
                  class="fas fa-circle fa-xs"
                  id={slideNum === 1 ? 'colorDot' : ''}
                  index={1}
                  onClick={handleDotBtn}
                ></i>
              </li>
              <li className="slickActive">
                <i
                  class="fas fa-circle fa-xs"
                  id={slideNum === 2 ? 'colorDot' : ''}
                  index={2}
                  onClick={handleDotBtn}
                ></i>
              </li>
              <li className="slickActive">
                <i
                  class="fas fa-circle fa-xs"
                  id={slideNum === 3 ? 'colorDot' : ''}
                  index={3}
                  onClick={handleDotBtn}
                ></i>
              </li>
            </ul>
          </div>
        </section>
        <section className="popStoreSection">
          <h2>평점이 높은 인기 식당</h2>
          <div className="popStoreListBox">
            <ul>
              <div className="popStore">
                <img
                  className="popStoreImg"
                  alt="식당사진"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/0776fea76b4a824ff583128cb51dd45c.jpg"
                />
                <div className="popStoreInfoBox">
                  <div className="topInfo">
                    <h3 className="mainStoreName">디저티스트</h3>
                    <span className="storeGrade">★ 4.3</span>
                  </div>
                  <div className="bottomInfo">
                    <span className="storeLocated">
                      송파/가락 - 카페/디저트
                    </span>
                  </div>
                </div>
              </div>
              <div className="popStore">
                <img
                  className="popStoreImg"
                  alt="식당사진"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/839/671720_1528772412240_82151?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
                />
                <div className="popStoreInfoBox">
                  <div className="topInfo">
                    <h3 className="mainStoreName">하얼빈</h3>
                    <span className="storeGrade">★ 4.5</span>
                  </div>
                  <div className="bottomInfo">
                    <span className="storeLocated">선릉 - 중식/중화요리</span>
                  </div>
                </div>
              </div>
              <div className="popStore">
                <img
                  className="popStoreImg"
                  alt="식당사진"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/338216/s7hlawose_yzkb.jpg?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
                />
                <div className="popStoreInfoBox">
                  <div className="topInfo">
                    <h3 className="mainStoreName">도스타코스</h3>
                    <span className="storeGrade">★ 4.6</span>
                  </div>
                  <div className="bottomInfo">
                    <span className="storeLocated">선릉 - 멕시칸/타코</span>
                  </div>
                </div>
              </div>
              <div className="popStore">
                <img
                  className="popStoreImg"
                  alt="식당사진"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/10636/33537_1454570126744_53616?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
                />
                <div className="popStoreInfoBox">
                  <div className="topInfo">
                    <h3 className="mainStoreName">소호정</h3>
                    <span className="storeGrade">★ 4.3</span>
                  </div>
                  <div className="bottomInfo">
                    <span className="storeLocated">양재동 - 국수/면요리</span>
                  </div>
                </div>
              </div>
              <div className="popStore">
                <img
                  className="popStoreImg"
                  alt="식당사진"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/192691_1427166322990?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80"
                />
                <div className="popStoreInfoBox">
                  <div className="topInfo">
                    <h3 className="mainStoreName">꺼벙이</h3>
                    <span className="storeGrade">★ 4.1</span>
                  </div>
                  <div className="bottomInfo">
                    <span className="storeLocated">선릉/삼성 - 분식</span>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
