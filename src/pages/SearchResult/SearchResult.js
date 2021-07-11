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

  // changeButtonColor = (e, currentidx) => {};

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

    // console.log(e.target.getAttribute('data-index')); // 이미 인덱스가 지정되어있으므로 굳이 어떤 인덱스인지 밝힐필요없다
    // console.log(currentidx);
    // if (e.target.getAttribute('data-index') === currentidx) //둘이 같다

    this.setState({
      backgroundcolor: '#0095F6',
    });
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
              {/* //&&앞이 true여야 뒤가 실행이 된다. 배열이 처음부터 true
              이기떄문에 다 돌아버림 - 조건부 렌더링 // */}
              {this.state.resultList.length > 0 &&
                this.state.resultList.map(data => {
                  return (
                    <Button
                      //key={data.id}
                      onClick={e => this.updateResult(e, data.id)}
                      data-index={
                        //버튼인덱스임 // 이렇게 하면 안됨//이렇게해서 값으로 넣어주기
                        //
                        this.state.resultList.length % 4 === 0
                          ? this.state.resultList.length / 4
                          : this.state.resultList.length / 4 + 1
                      }
                      style={{ backgroundColor: this.state.backgroundcolor }}
                    />
                  );
                })}
              {/* 맵함수로 바꾸는 이유  : 같은 버튼 태그들을 늘어놓았을때 - 모두 같은 백그라운드 컬러를 바라보기 때문에 색도 동시에 모두 바뀌어 버림 
                하지만 맵으로 돌려서 하나씩 뱉으면 각각의 스테이트를 가지게 된다 ,또한 모두가 한 값을 바라보지 않게 하기위해서는 컴포넌트로 따로 분리를 해야한다   */}
              {/* <button
                type="button"
                className="paging"
                onClick={e => this.updateResult(e, 1)}
                data-index={1}
                style={{ backgroundColor: this.state.backgroundcolor }}
              >
                1
              </button>
              <button
                type="button"
                className="paging"
                onClick={e => this.updateResult(e, 2)}
                data-index={2}
                style={{ backgroundColor: this.state.backgroundcolor }}
              >
                2
              </button>
              <button
                type="button"
                className="paging"
                onClick={e => this.updateResult(e, 3)}
                //괄호가없을때 this.updateResult - 호출되지 않는다. 온클릭에 해당하는 행위가 일어나지 않는 이상 호출 안하고 읽기만함
                data-index={3}
                //() => this.updateResult(e, 3) // 새로운 함수안에 넣어준 이유 - 바로 호출되지 않게하려고
                style={{ backgroundColor: this.state.backgroundcolor }}
              >
                3
              </button> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchResult;
