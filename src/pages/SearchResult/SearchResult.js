import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchResultComponent from '../SearchResultComponent/SearchResultListComponent';
import Button from './PagingButtonComponent';
import Filter from '../Filter/Filter';
import { BASE_URL } from '../../config';
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
      `${BASE_URL}/restaurants/search${
        this.props.location.search || '?'
      }&offset=0&limit=6`
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
      if (Array.isArray(object[i])) {
        object[i].forEach(tap => {
          queryString += `&${i}=${tap}`;
        });
      } else {
        queryString += `&${i}=${object[i]}`;
      }
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
        `http://10.58.0.115:8000/restaurants/search${this.props.location.search}`
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
  }

  searchByFilter = (ratingCurrentIdx, priceCurrentIdx, last) => {
    let query = '';

    if (ratingCurrentIdx.title) {
      query += `sort=${ratingCurrentIdx.name}`;
    }

    if (last.length > 0) {
      const newValues = [];
      for (let i = 0; i < last.length; i++) {
        newValues.push(last[i].slice(1));
      }
      const newQuery = [];
      for (let i = 0; i < newValues.length; i++) {
        newQuery.push(`&keyword=${newValues[i]}`);
      }

      query += newQuery.join('');
    }
    this.props.history.push(`SearchResult?${query}`);
  };

  makeButton = totalData => {
    let newArr = [];

    for (let idx = 1; idx <= Math.ceil(totalData / 6); idx++) {
      newArr.push(idx);
    }
    return newArr;
  };

  goToMainDetail = () => {
    this.props.history.push(`/detail/${this.state.resultList.restaurantID}`);
  };

  render() {
    const { resultList } = this.state;

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
                        starRating={
                          result.average_rating &&
                          result.average_rating.toFixed(1)
                        }
                        location={result.restaurantAddress}
                        onClick={this.goToMainDetail}
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
              {this.makeButton(resultList.total).map(idx => {
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
