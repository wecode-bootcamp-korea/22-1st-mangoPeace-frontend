import React from 'react';
import './SearchResult.scss';
//import RESULT from '../Data/resultData';
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent';
const LIMIT = 10;
class SearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
      resultList: [],
      searchResultMainImage: null,
      menuName: '',
      star: null,
      location: '',
      category: '',
      id: null,
      //페이징
      currentIdx: 1,
      //
      name: '',
      menu_id: '',
      backgroundcolor: null,
    };
  }

  //최초렌더링후에 생기는 화면
  componentDidMount() {
    // console.log('componentDidMount:' + this.state.backgroundcolor);
    fetch('http://localhost:3000/data/resultData1.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });
  }
  //페이지 2 눌렀을때 나오는 화면
  updateResult = () => {
    //console.log('updateResult:' + this.state.backgroundcolor);

    fetch('http://localhost:3000/data/resultData2.json/page=${LIMIT}', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });
  };

  // 2번 버튼 클릭시 검색결과 변경 , 버튼 컬러 변경
  updatePage = e => {
    console.log('첫번째 버튼 누른 후에도 작동하는 지 확인 '); //된다 !!! 이제는 첫번쨰 버튼 누르고 첫 화면 나오게 하기
    this.updateResult();
    this.changeButtonColor(e);
  };
  changeButtonColor = e => {
    //console.log('changeButtonColor:' + this.state.backgroundcolor);
    if (e.target.name === 'button2') {
      this.setState({
        backgroundcolor: '#0095F6',
      });
    }
  };

  render() {
    console.log('렌더:' + this.state.backgroundcolor);

    return (
      <>
        <nav>SearchResult</nav>

        <div className="searchResultMain">
          <div className="searchResultHead">
            <div className="searchResultTitle">
              <div className="searchKeyword">국밥</div>
              <div className="resultRank"> 맛집 인기 검색 순위</div>
            </div>
            <div className="searchResultFilter">
              <i className="fas fa-list"></i>
              <span className="letterFilter">filter</span>
            </div>
          </div>

          <div className="searchResultBody">
            <div className="searchResultList">
              {this.state.resultList.map(result => {
                return (
                  <span className="searchResultListContent" key={result.id}>
                    <SearchResultComponent
                      searchResultMainImage={result.searchResultMainImage}
                      menuName={result.menuName}
                      star={result.star} // 숫자의 기본값이 얼마인지 모름 !
                      location={result.location}
                      category={result.category}
                      //id={result.id}
                    />
                  </span>
                );
              })}
            </div>
            <div className="searchResultPaging">
              <button
                type="button"
                className="paging"
                onClick={this.updatePage}
              >
                1
              </button>

              <button
                name="button2"
                type="button"
                className="paging"
                onClick={this.updatePage}
                style={{ backgroundColor: this.state.backgroundcolor }}
                //currentIdx={}
              >
                2
              </button>
              <span className="paging">3</span>
              <span className="paging">4</span>
              <span className="paging">5</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchResult;
