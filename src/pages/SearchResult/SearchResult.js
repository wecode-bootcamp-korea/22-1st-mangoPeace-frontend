import React from 'react';
import './SearchResult.scss';
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent';
import Button from './PagingButtonComponent';
import Filter from '../Filter/Filter';

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
  //메인화면에서 검색어 가져옴
  componentDidMount() {
    fetch('http://localhost:3000/data/resultData3.json', {
      //this.props.location.search

      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });
  }
  //
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
    });
  };

  render() {
    const newArr = [];

    for (
      let idx = 1;
      idx <= Math.ceil(40 / 4);
      //this.state.resultList.length // 단한페이지 배열의 길이여서 틀림
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
              {/* <div className="searchKeyword">국밥</div> 검색결과에 따라 달라지게 구현(추가구현)*/}
              <div className="resultRank"> 검색 결과</div>
            </div>
          </div>

          <div className="searchResultBody">
            <div className="searchResultListFilterBox">
              <div className="searchResultList">
                {/* {this.state.resultList.length>0 && */}
                {this.state.resultList.map(result => {
                  return (
                    <span className="searchResultListContent" key={result.id}>
                      <SearchResultComponent
                        searchResultMainImage={result.searchResultMainImage}
                        menuName={result.menuName}
                        star={result.star}
                        location={result.location}
                        category={result.category}
                      />
                    </span>
                  );
                })}
              </div>
              <span className="SideFilter">
                <Filter />
              </span>
            </div>

            <div className="searchResultPaging">
              {newArr.map(idx => {
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
