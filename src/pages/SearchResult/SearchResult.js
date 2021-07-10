import React from 'react';
import './SearchResult.scss';
//import RESULT from '../Data/resultData';
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent';
class SearchResult extends React.Component {
  constructor() {
    console.log('생성자:');
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
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     resultList: RESULT,
  //   });
  // }

  componentDidMount() {
    fetch('http://localhost:3000/data/resultData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });
  }

  updateResult = e => {
    fetch('http://localhost:3000/data/resultData_2.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });
  };

  render() {
    // console.log(this.state.resultList);
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
                  <SearchResultComponent
                    searchResultMainImage={result.searchResultMainImage}
                    menuName={result.menuName}
                    star={result.star} // 숫자의 기본값이 얼마인지 모름 !
                    location={result.location}
                    category={result.category}
                  />
                );
              })}
            </div>
            <div className="searchResultPaging">
              <button
                type="button"
                className="paging"
                //currentIndex={this.state.currentIdx}
                //onClick={this.updateResult}
              >
                1
              </button>
              <button
                type="button"
                className="paging"
                onClick={this.updateResult}
              >
                2
              </button>
              <span className="paging">3</span>
              <span className="paging">4</span>
              <span className="paging">5</span>
              <span className="paging">6</span>
              <span className="paging">7</span>
              <span className="paging">8</span>
              <span className="paging">9</span>
              <span className="paging">10</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchResult;
