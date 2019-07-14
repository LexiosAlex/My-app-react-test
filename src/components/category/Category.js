import React from 'react';
import './Category.css';
import 'antd/dist/antd.css';
import {Button, Icon, Row} from 'antd';

function Category() {
  return (
    <Row className='category'>
      <Button type="primary">
        <Icon type="close" />
      </Button>
      <Button className={'category__main-btn'} type="link">
        Категория
      </Button>
    </Row>
  );
}

export default Category;
