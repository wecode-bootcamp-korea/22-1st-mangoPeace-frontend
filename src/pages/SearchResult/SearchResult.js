import React from 'react';
import './SearchResult.scss';
import SearchResultComponent from '../SearchResultComponent/SearchResultListComponent';
import Button from './PagingButtonComponent';
import Filter from '../Filter/Filter';

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
      numberOfButton: 0,
      totalData: 12,
    };
  }
  //메인화면에서 검색어 가져옴
  componentDidMount() {
    fetch(
      `http://10.58.4.170:8000/restaurants/search?keyword=${this.props.location.search}&offset=0&limit=6`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: [
            ...data.category_result,
            ...data.sub_category_result,
            ...data.restaurant_result,
          ],
          numberOfButton: data['total'],
        });
        this.makingButton(data['total']);
      });
  }

  updateResult = (e, currentidx) => {
    const limit = 6;
    let offset = (currentidx - 1) % 6;
    fetch(
      `http://10.58.4.170:8000/restaurants/search?keyword=${this.props.location.search}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: [
            ...data.category_result,
            ...data.sub_category_result,
            ...data.restaurant_result,
          ],
        });
        this.makingButton(data['total']);
      });

    this.setState({
      currentId: currentidx,
    });
  };

  SearchByFilter = (ratingCurrentIdx, priceCurrentIdx, values) => {
    console.log(`"object"`, 'object');
    let query = [];

    if (ratingCurrentIdx.title) {
      query.push(`rating=${ratingCurrentIdx.title.slice(1)}`);
    }

    // if (values > 0) { 다시 만들어야하는 부분- 식은 세웠지만 어떻게 관리해야하는 것인지 모름

    //     const last =[];
    // for(let i =0 ; i < values.length ;i++){
    //   last.push(values.find(item=>item.id===i).title)  /last 라는 배열을 스테이트로 관리해야할까 ?
    // }
    // }

    const queryString = '?' + query.join('&'); // 이 쿼리 스트링을 어떻게 fetchFilterData  로 옯길까? + 기존검색어도 함께 검색함

    this.fetchFilterData();
  };

  fetchFilterData = currentidx => {
    const limit = 6;
    let offset = (currentidx - 1) % 6;
    fetch(
      `http://10.58.4.170:8000/restaurants/search?keyword=${this.props.location.search}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        this.makingButton(data['total']);
        this.setState({
          resultList: data,
        });
      });
  };

  makingButton = totalData => {
    //값이 없으면 오류나서 페이지 안뜨는지 여부 확인 , 함수 내부로 옮겨서 map 함수 사용 불가능
    //어떻게 해결 ? 이전처럼 렌더링 함수안에 위치시키기 ?
    let newArr = [];
    this.setState({
      totalData: totalData,
    });
    for (let idx = 1; idx <= Math.ceil(12 / 6); idx++) {
      //임시
      newArr.push(idx);
    }
  };

  render() {
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
                <Filter SearchByFilter={this.SearchByFilter} />
              </span>
            </div>

            <div className="searchResultPaging">
              {[1, 2, 3, 4].map(idx => {
                //임시로 만든 배열
                return (
                  <Button
                    key={idx}
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
