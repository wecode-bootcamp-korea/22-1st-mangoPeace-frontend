import React from 'react';
import '../Filter/Filter.scss';

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
