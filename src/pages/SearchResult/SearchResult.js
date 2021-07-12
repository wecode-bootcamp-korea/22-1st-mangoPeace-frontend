import React from 'react';
import './SearchResult.scss';
//import RESULT from '../Data/resultData';
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent';
import Button from './Button';

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
      totalItems: 50,

      name: '',
      menu_id: '',
      idx: '1',
      currentId: 1,
    };
  }

  //최초렌더링후에 생기는 화면
  componentDidMount() {
    fetch('http://localhost:3000/data/resultData3.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });
    console.log(this.state.resultList);
  }

  //페이지 2 눌렀을때 나오는 화면 // 전체페이지 기준으로 페이지를 나누게 되어서 current 인덱스 의미없음
  updateResult = (e, currentidx) => {
    fetch('http://localhost:3000/data/resultData3.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });
    this.setState({
      currentId: currentidx,
      backgroundcolor: '#0095F6',
    });
  };

  render() {
    const newArr = [];

    for (
      let idx = 1;
      idx <= Math.ceil(40 / 4);
      //this.state.resultList.length
      idx++
    ) {
      //수 임의로 넣어줌
      newArr.push(idx);
    }

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
              {/* {this.state.resultList.length>0 && */}
              {this.state.resultList.map(result => {
                console.log(this.state.resultList);

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
              {/* } */}
            </div>
            <div className="searchResultPaging">
              {/* 전체음식점 수 기준으로 계산  */}

              {newArr.map(idx => {
                // 버튼이 돌아가면서 한번씩 나오는듯

                return (
                  <Button
                    dataIndex={idx}
                    updateResult={this.updateResult}
                    isButtonClicked={this.state.currentId === idx}
                  />
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
