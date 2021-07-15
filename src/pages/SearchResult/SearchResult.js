import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchResultComponent from '../SearchResultComponent/SearchResultListComponent';
import Button from './PagingButtonComponent';
import Filter from '../Filter/Filter';
import './SearchResult.scss';

class SearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
      resultList: [],
      searchResultMainImage: null,
      restaurantName: '',
      starRating: null,
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
    fetch(
      `http://10.58.4.170:8000/restaurants/search${this.props.location.search}&offset=0&limit=6`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: [
            ...data.category_result,
            ...data.sub_category_result,
            ...data.restaurant_result,
          ],
        });
      });
  }

  queryStringToObject = querystring => {
    // parse query string
    const params = new URLSearchParams(querystring);
    const obj = {};
    // iterate over all keys
    for (const key of params.keys()) {
      if (params.getAll(key).length > 1) {
        obj[key] = params.getAll(key);
      } else {
        obj[key] = params.get(key);
      }
    }
    return obj;
  };

  objectToQueryString = object => {
    let queryString = '';
    for (let i in object) {
      queryString += `&${i}=${object[i]}`;
    }
    return '?' + queryString.slice(1);
  };

  paginate = (e, currentidx) => {
    const limit = 6;
    const offset = (currentidx - 1) % 6;
    const currentQuery = this.props.location.search;

    const newQueryObject = this.queryStringToObject(currentQuery);
    newQueryObject.offset = offset;
    newQueryObject.limit = limit;

    const newQueryString = this.objectToQueryString(newQueryObject);

    this.setState(
      {
        currentId: currentidx,
      },
      () => {
        this.props.history.push(`/SearchResult${newQueryString}`);
      }
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(
        `http://10.58.4.170:8000/restaurants/search${this.props.location.search}`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            data: [
              ...data.category_result,
              ...data.sub_category_result,
              ...data.restaurant_result,
            ],
          })
        );
    }
  }

  searchByFilter = (ratingCurrentIdx, priceCurrentIdx, last) => {
    let query = '';

    if (ratingCurrentIdx.title) {
      query += `rating=${ratingCurrentIdx.title.slice(1)}`;
    }

    if (last.length > 0) {
      const newValues = [];
      for (let i = 0; i < last.length; i++) {
        newValues.push(last[i].slice(1));
      }
      const newQuery = [];
      for (let i = 0; i < newValues.length; i++) {
        newQuery.push('&keyword=${' + newValues[i] + '}');
      }

      query += newQuery.join('');
    }
  };

  makeButton = totalData => {
    //값이 없으면 오류나서 페이지 안뜨는지 여부 확인 , 함수 내부로 옮겨서 map 함수 사용 불가능
    //어떻게 해결 ? 이전처럼 렌더링 함수안에 위치시키기 ?
    let newArr = [];

    for (let idx = 1; idx <= Math.ceil(totalData / 6); idx++) {
      //임시
      newArr.push(idx);
    }
    return newArr;
  };

  render() {
    const { resultList } = this.state;

    console.log(
      `this.makeButton(resultList.total)`,
      this.makeButton(resultList.total)
    );
    return (
      <>
        <nav>SearchResult</nav>
        <div className="searchResultMain">
          <div className="searchResultHead">
            <div className="searchResultTitle">
              <div className="resultRank"> 검색 결과</div>
            </div>
          </div>

          <div className="searchResultBody">
            <div className="searchResultListFilterBox">
              <div className="searchResultList">
                {this.state.resultList.map(result => {
                  return (
                    <span className="searchResultListContent" key={result.id}>
                      <SearchResultComponent
                        searchResultMainImage={result.food_image_url}
                        restaurantName={result.restaurantName}
                        starRating={result.average_rating}
                        location={result.restaurantAddress}
                        //category={result.}
                      />
                    </span>
                  );
                })}
              </div>
              <span className="SideFilter">
                <Filter searchByFilter={this.searchByFilter} />
              </span>
            </div>

            <div className="searchResultPaging">
              {this.makeButton(12).map(idx => {
                //임시로 만든 배열
                return (
                  <Button
                    key={idx}
                    dataIndex={idx}
                    paginate={this.paginate}
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

export default withRouter(SearchResult);
