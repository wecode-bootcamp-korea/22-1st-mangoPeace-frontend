import React from 'react';
import './SearchResult.scss';
//import RESULT from '../Data/resultData';
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent';
//import Button from './Button';
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
      currentidx: 1,
      //
      name: '',
      menu_id: '',
      backgroundcolor: null,
    };
  }

  //최초렌더링후에 생기는 화면
  componentDidMount() {
    fetch('http://localhost:3000/data/resultData2.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data.page1,
        });
      });
    console.log(this.state.resultList);
  }
  //페이지 2 눌렀을때 나오는 화면
  updateResult = () => {
    fetch('http://localhost:3000/data/resultData2.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data.page2,
        });
      });
  };

  // 2번 버튼 클릭시 검색결과 변경 , 버튼 컬러 변경
  updatePage = e => {
    this.updateResult();
    this.changeButtonColor(e);
  };
  changeButtonColor = e => {
    if (e.target.name === 'button2') {
      this.setState({
        backgroundcolor: '#0095F6',
      });
    } else if (e.target.name === 'button1') {
      this.setState({
        backgroundcolor: '#0095F',
      });
    }
  };

  render() {
    console.log('렌더:' + this.state.backgroundcolor);
    //const { updatePage } = this.state;
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
              {this.state.resultList.map(result => {
                return (
                  <span key={result.id}>
                    <button
                      type="button"
                      className="paging"
                      onClick={this.updatePage}
                      currentindex={this.props.currentidx}
                      style={{ backgroundColor: this.props.backgroundcolor }}
                    >
                      1
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchResult;
