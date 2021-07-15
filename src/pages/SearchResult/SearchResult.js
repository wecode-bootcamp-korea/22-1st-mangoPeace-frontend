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
    };
  }
  //메인화면에서 검색어 가져옴
  componentDidMount() {
    fetch(
      `http://10.58.4.170:8000/search?keyword=${this.props.location.search}&offset=0&limit=6`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log('data', data['count']);
        this.setState({
          resultList: [
            ...data.category_result,
            ...data.sub_category_result,
            ...data.restaurant_result,
          ],
        });
      });
    this.makingButton(data['total']); //수정해야함- 준영님에게 여쭈어 보기 
  }

  updateResult = (e, currentidx) => {
    const limit = 6;
    let offset = (currentidx - 1) % 6;
    fetch(
      //'http://localhost:3000/data/resultData3.json',
      `http://10.58.4.170:8000/search?keyword=%EC%9D%BC%EC%8B%9D&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          // this.state.resultList,
          data: [
            ...data.category_result,
            ...data.sub_category_result,
            ...data.restaurant_result,
          ],
        });
      });
      this.makingButton(data['total']);
    this.setState({
      currentId: currentidx,
    });
  };

  SearchByFilter = (ratingCurrentIdx, priceCurrentIdx, menuTitleArr) => {
    //각각의 경우가 없는 경우 (밸류는 0 인경우를 고려해야한다) - 이때에 따라서 쿼리스트링을 다르게 해야한다
    //셋다 값이 없는 경우는 없다
    // 각각의 앞의 두개는 숫자가 들어있으므로 처리를 해준다. 값은 하나만 가짐.
    console.log(`"object"`, 'object');
    let query = [];

    if (ratingCurrentIdx.title) {
      query.push(`rating=${ratingCurrentIdx.title.slice(1)}`);
    }
    // if (priceCurrentIdx.title) {
    //   query +=
    //     '${' + priceCurrentIdx.title.slice(1) + '}';
    // }
    if (menuTitleArr.length > 0) {
      console.log(`values`, menuTitleArr);
    }

    const queryString = '?' + query.join('&');

    this.fetchFilterData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(`컴디업`, 'ㅇㅇㅇ');
    this.fetchPhotos(this.state.currentId);
  };

  // componentDidMount(){
  //   this.fetchFilterData(this.state.currentId)
  // }

  //스테이트로 url 을 관리 로직구성
  fetchFilterData = (currentidx) => {
    const LIMIT = 6;
    let offset = (currentidx - 1) % 6;
    fetch(`http://localhost:3000/data/resultData${currentidx}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultList: data,
        });
      });
      this.makingButton(data['total']);
  };

  //바뀐 state 값 가져올 핸들러 구성
  idHandler = e => {
    this.setState({ currentId: e.target.dataset.idx });
  };

  makingButton = (data['total']) => {
    const newArr = [];
    this.setState({
      numberOfButton : data['total'],
    })
    for (
      let idx = 1;
      idx <= Math.ceil(20 / 6);
      //this.state.resultList.length // 단한페이지 배열의 길이여서 틀림
      idx++
    ) {
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
              {/* <div className="searchKeyword">국밥</div> 검색결과에 따라 달라지게 구현(추가구현)*/}
              <div className="resultRank"> 검색 결과</div>
            </div>
          </div>

          <div className="searchResultBody">
            <div className="searchResultListFilterBox">
              <div className="searchResultList">
                {/* {this.state.resultList.length>0 && */}
                {this.state.resultList.map(result => {
                  console.log('map', this.state.resultList);
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
              {newArr.map(idx => {
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
