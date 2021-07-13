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

  render() {
    const { idx, handleButton } = this.props;
    return (
      <button
        key={idx}
        onClick={() => handleButton(idx)}
        className={
          this.props.values.includes(idx)
            ? 'categoryMenuList on'
            : 'categoryMenuList'
        }
      >
        {idx.title}
      </button>
    );
  }
}

export default MenuCategorySelectSectionComponent;
