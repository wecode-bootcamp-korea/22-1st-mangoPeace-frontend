import React from 'react';
import '../Filter/Filter.scss';

const BUTTONS = [
  { id: 0, title: 'pizza' },
  { id: 1, title: 'pasta' },
  { id: 2, title: 'hamburger' },
  { id: 3, title: 'soup' },
  { id: 4, title: 'barbeque' },
  { id: 5, title: 'noodle' },
  { id: 6, title: 'sushi' },
  { id: 7, title: 'cutlet' },
  { id: 8, title: 'donburi' },
];

class MenuCategorySelectSectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  checkuttonSelected = () => {
    const { currentIdx, idx } = this.props;
    if (Array.isArray(currentIdx)) {
      return currentIdx.includes(idx);
    } else {
      return currentIdx === idx; //집가서 고치자
    }
  };

  render() {
    const {
      idx,
      stateKey,
      currentIdx,
      checkMenuCategorySelectSection,
      currentIdxArr,
    } = this.props;
    return (
      <button
        type="button"
        currentIdx={currentIdx}
        stateKey="menuCurrentIdx"
        onClick={() => checkMenuCategorySelectSection(stateKey, idx)}
        className={
          currentIdx === idx ? 'categoryMenuList on' : 'categoryMenuList'
        }
      >
        {this.props.title}
      </button>
    );
  }
}

export default MenuCategorySelectSectionComponent;
