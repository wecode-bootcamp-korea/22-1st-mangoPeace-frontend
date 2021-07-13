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
    const { isClicked3 } = this.props;
    console.log(`isClicked3`, isClicked3);
    return (
      <button
        type="button"
        dataIdx3={this.props.dataIdx3}
        key={this.props.dataIdx3}
        onClick={e =>
          this.props.checkMenuCategorySelectSection(e, this.props.dataIdx3)
        }
        className={isClicked3 ? 'categoryMenuList on' : 'categoryMenuList'}
      >
        {this.props.title}
      </button>
    );
  }
}

export default MenuCategorySelectSectionComponent;
