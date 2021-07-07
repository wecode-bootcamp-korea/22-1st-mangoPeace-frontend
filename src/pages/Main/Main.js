import React from 'react';

import './Main.scss';

class Main extends React.Component {
  state = {
    slideNum: 1,
    slideWidth: 0,
    imgInterval: 0,
  };

  //슬라이드 갯수
  totalSlide = 3;

  handleNextBtn = () => {
    const { slideNum, slideWidth, imgInterval } = this.state;
    const { totalSlide } = this;

    this.setState({
      slideNum: slideNum + 1,
      slideWidth: slideWidth - 1500,
      imgInterval: imgInterval - 30,
    });
  };

  handlePrevBtn = () => {
    const { slideNum, slideWidth, imgInterval } = this.state;
    const { totalSlide } = this;

    this.setState({
      slideNum: slideNum - 1,
      slideWidth: slideWidth + 1500,
      imgInterval: imgInterval + 30,
    });
  };

  handleDotBtn1 = () => {
    const { slideNum, slideWidth, imgInterval } = this.state;
    const gap = 1 - slideNum;
    console.log(gap);

    this.setState({
      slideNum: 1,
      slideWidth: slideWidth - 1500 * gap,
      imgInterval: imgInterval - 30 * gap,
    });
  };

  handleDotBtn2 = () => {
    const { slideNum, slideWidth, imgInterval } = this.state;
    const gap = 2 - slideNum;
    console.log(gap);

    this.setState({
      slideNum: 2,
      slideWidth: slideWidth - 1500 * gap,
      imgInterval: imgInterval - 30 * gap,
    });
  };

  handleDotBtn3 = () => {
    const { slideNum, slideWidth, imgInterval } = this.state;
    const gap = 3 - slideNum;

    this.setState({
      slideNum: 3,
      slideWidth: slideWidth - 1500 * gap,
      imgInterval: imgInterval - 30 * gap,
    });
  };

  render() {
    const {
      handlePrevBtn,
      handleNextBtn,
      handleDotBtn1,
      handleDotBtn2,
      handleDotBtn3,
      totalSlide,
    } = this;
    const { slideNum, slideWidth, imgInterval } = this.state;

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
              onClick={handlePrevBtn}
            >
              <i class="fas fa-chevron-left fa-3x" id="arrowLeft"></i>
            </button>
            <ul className="foodThemeImgBox">
              <div
                className="foodThemeImg"
                style={{
                  transform: `translateX(${slideWidth + imgInterval}px)`,
                }}
              >
                <li>
                  <img
                    alt="테마이미지"
                    src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/vh3szktueppvzbam.png?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                  />
                  <h3>파전 맛집 베스트 30곳</h3>
                  <h4>"비 오는 날은 파전에 막걸리지"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/4y8ry99myorgriw9.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                  />
                  <h3>선릉 맛집 베스트 30곳</h3>
                  <h4>"구석구석 맛집으로 가득한 이 곳!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/0zjqwsskbtpucd0i.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                  />
                  <h3>수제버거 맛집 베스트 15곳</h3>
                  <h4>"부실한 패스트푸드는 이제 그만!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/vh3szktueppvzbam.png?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                  />
                  <h3>파전 맛집 베스트 2곳</h3>
                  <h4>"비 오는 날은 파전에 막걸리지"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/4y8ry99myorgriw9.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                  />
                  <h3>선릉 맛집 베스트 30곳</h3>
                  <h4>"구석구석 맛집으로 가득한 이 곳!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/0zjqwsskbtpucd0i.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                  />
                  <h3>수제버거 맛집 베스트 15곳</h3>
                  <h4>"부실한 패스트푸드는 이제 그만!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/vh3szktueppvzbam.png?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                  />
                  <h3>파전 맛집 베스트 3곳</h3>
                  <h4>"비 오는 날은 파전에 막걸리지"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/4y8ry99myorgriw9.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                  />
                  <h3>선릉 맛집 베스트 30곳</h3>
                  <h4>"구석구석 맛집으로 가득한 이 곳!"</h4>
                </li>
                <li>
                  <img
                    alt="테마이미지"
                    src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/0zjqwsskbtpucd0i.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                  />
                  <h3>수제버거 맛집 베스트 15곳</h3>
                  <h4>"부실한 패스트푸드는 이제 그만!"</h4>
                </li>
              </div>
            </ul>
            <button
              className={slideNum < totalSlide ? 'arrowBtnRight' : 'none'}
              onClick={handleNextBtn}
            >
              <i class="fas fa-chevron-right fa-3x" id="arrowRight"></i>
            </button>
            <ul className="slickDots">
              <li className="slickActive">
                <button className="dotBtn" onClick={handleDotBtn1}>
                  <i
                    class="fas fa-circle fa-xs"
                    id={slideNum === 1 ? 'colorDot' : ''}
                  ></i>
                </button>
              </li>
              <li className="slickActive">
                <button className="dotBtn" onClick={handleDotBtn2}>
                  <i
                    class="fas fa-circle fa-xs"
                    id={slideNum === 2 ? 'colorDot' : ''}
                  ></i>
                </button>
              </li>
              <li className="slickActive">
                <button className="dotBtn" onClick={handleDotBtn3}>
                  <i
                    class="fas fa-circle fa-xs"
                    id={slideNum === 3 ? 'colorDot' : ''}
                  ></i>
                </button>
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
