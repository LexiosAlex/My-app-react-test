import React from 'react';
import './Category.css';
import 'antd/dist/antd.css';
import {Button, Icon, Row} from 'antd';

const Category = (props) => {
  const {category} = props;

  if (category.categoryTitle === 'noCategory') {
    return (
    <Row className='category'>
      <Button className={'category__main-btn category__main-btn--no-category'} type="link">
        {category.categoryName}
      </Button>
    </Row>
    );
  } else {
    return (
      <Row className='category'>
        <Button type="primary">
          <Icon type="close" />
        </Button>
        <Button className={'category__main-btn'} type="link">
          {category.categoryName}
        </Button>
      </Row>
    );
  }
};

export default Category;
