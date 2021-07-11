import React from 'react';
import './SearchResult.scss';
//import RESULT from '../Data/resultData';
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent';
//import Button from './Button';

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
      // currentidx: 1,
      //
      name: '',
      menu_id: '',
      backgroundcolor: null,
    };
  }

  //최초렌더링후에 생기는 화면
  componentDidMount() {
    //console.log(this.state.resultList);
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

  // 2번 버튼 클릭시 검색결과 변경 , 버튼 컬러 변경

  changeButtonColor = () => {
    this.setState({
      backgroundcolor: '#0095F6',
    });
  };

  //페이지 2 눌렀을때 나오는 화면
  updateResult = (e, currentidx) => {
    // const LIMIT = 4;
    //const offset = e?.target.dataset.idx;

    // this.setState({ currentidx: currentidx });
    // console.log(this.state.currentidx); // 1출력됨
    fetch(`http://localhost:3000/data/resultData${currentidx}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });

    this.changeButtonColor(e);
  };

  render() {
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
              {/* {this.state.resultList.map(data => {
                return (
                  <span key={data.id}>
                    <button
                      type="button"
                      className="paging"
                      onClick={this.updatePage}
                      currentindex={this.state.currentidx}
                      style={{ backgroundColor: this.state.backgroundcolor }}
                    >
                      1
                    </button>
                  </span>
                );
              })} */}
              <button
                type="button"
                className="paging"
                onClick={e => this.updateResult(e, 1)}
                //={this.state.currentidx}
                style={{ backgroundColor: this.state.backgroundcolor }}
              >
                1
              </button>
              <button
                type="button"
                className="paging"
                onClick={e => this.updateResult(e, 2)}
                //currentindex={this.state.currentidx}
                style={{ backgroundColor: this.state.backgroundcolor }}
              >
                2
              </button>
              <button
                type="button"
                className="paging"
                // onClick={e => this.updateResult(e, 3)}
                onClick={e => this.updateResult(e, 3)}
                //괄호가없을때 this.updateResult - 호출되지 않는다. 온클릭에 해당하는 행위가 일어나지 않는 이상 호출 안하고 읽기만함
                //currentindex={this.state.currentidx}
                //() => this.updateResult(e, 3) // 새로운 함수안에 넣어준 이유 - 바로 호출되지 않게하려고
                style={{ backgroundColor: this.state.backgroundcolor }}
              >
                3
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchResult;
