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

      name: '',
      menu_id: '',
      backgroundcolor: null,
      idx: '1',
    };
  }

  //최초렌더링후에 생기는 화면
  componentDidMount() {
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
  updateResult = (e, currentidx) => {
    // const LIMIT = 4;
    //const offset = e?.target.dataset.idx;

    fetch(`http://localhost:3000/data/resultData${currentidx}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });

    // console.log(e.target.getAttribute('data-index')); // 이미 인덱스가 지정되어있으므로 굳이 어떤 인덱스인지 밝힐필요없다
    // console.log(currentidx);
    // if (e.target.getAttribute('data-index') === currentidx) //둘이 같다

    this.setState({
      backgroundcolor: '#0095F6',
    });
  };

  render() {
    const newArr = [];
    for (
      let idx = 1;
      idx <= Math.ceil(this.state.resultList.length / 4);
      idx++
    ) {
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
            </div>
            <div className="searchResultPaging">
              {/* {newArr.map(idx => {
                console.log(idx);
                return (
                  //<Button
                  // onClick={e => this.updateResult(e, idx)}
                  // data-index={idx}
                  // style={{ backgroundColor: this.state.backgroundcolor }}
                  // />
                  <button
                    type="button"
                    className="paging"
                    onClick={e => this.props.updateResult(e, idx)}
                    data-index={idx}
                    style={{ backgroundColor: this.state.backgroundcolor }}
                  >
                    {idx}
                  </button> //내가 지금 이걸 굳이 해야하나 ?
                );
              })} */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchResult;
