import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Button} from 'antd';
import Category from '../category/Category.js'

const ButtonGroup = Button.Group;
const { Header, Footer, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header  style={{height:'auto'}} className='main-header'>
          <Row gutter={20}>
            <Col span={4}>
              <a className='main-header__logo logo'>
                <p className='logo__name'>My-app</p>
              </a>
            </Col>
            <Col span={8} push={4}>
              <div style={{paddingTop:'50px'}} className='main-header__button-container'>
                <ButtonGroup>
                  <Button className="button-header" type="primary">
                    Добавить товар
                  </Button>
                  <Button className="button-header" type="primary">
                    Добавить категорию
                  </Button>
                </ButtonGroup>
              </div>
            </Col>
          </Row>
        </Header>
        <Content className="page-main">
          <Row className='page-main__row' align={'bottom'} gutter={20}>
            <Col span={4}>
              <p className='visually-hidden'>Категории</p>
            </Col>
            <Col span={2}>
              <p className='page-main__nav-item page-main__nav-item--id'>id</p>
            </Col>
            <Col span={6}>
              <p className='page-main__nav-item'>Название товара</p>
            </Col>
            <Col span={3}>
              <p className='page-main__nav-item'>Цена/закуп</p>
            </Col>
            <Col span={3}>
              <p className='page-main__nav-item'>Цена</p>
            </Col>
            <Col span={6}>
              <p className='visually-hidden'>Редактировать</p>
            </Col>
          </Row>
          <Row className='page-main__row' gutter={20}>
            <Col span={4}>
              <Category/>
            </Col>
            <Col style={{textAlign:'center'}} span={2}>
              <Row className='item-id'>1</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={6}>
              <Row className='item-name'>Товар 1</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={3}>
              <Row className='item-whole-price'>2200</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={3}>
              <Row className='item-price'>2500</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={6}>
              <Row type='flex' justify='space-around'>
                <Button className="page-main__edit-category-btn" type="primary">
                  Удалить
                </Button>
                <Button className="page-main__edit-category-btn" type="primary">
                  Изменить
                </Button>
              </Row>
            </Col>
          </Row>
          <Row className='page-main__row' gutter={20}>
            <Col span={4}>
              <Category/>
            </Col>
            <Col style={{textAlign:'center'}} span={2}>
              <Row className='item-id'>2</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={6}>
              <Row className='item-name'>Товар 2</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={3}>
              <Row className='item-whole-price'>2200</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={3}>
              <Row className='item-price'>2700</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={6}>
              <Row type='flex' justify='space-around'>
                <Button className="page-main__edit-category-btn" type="primary">
                  Удалить
                </Button>
                <Button className="page-main__edit-category-btn" type="primary">
                  Изменить
                </Button>
              </Row>
            </Col>
          </Row>
          <Row className='page-main__row' gutter={20}>
            <Col span={4}>
              <Category/>
            </Col>
            <Col style={{textAlign:'center'}} span={2}>
              <Row className='item-id'>3</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={6}>
              <Row className='item-name'>Товар 3</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={3}>
              <Row className='item-whole-price'>2200</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={3}>
              <Row className='item-price'>2700</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={6}>
              <Row type='flex' justify='space-around'>
                <Button className="page-main__edit-category-btn" type="primary">
                  Удалить
                </Button>
                <Button className="page-main__edit-category-btn" type="primary">
                  Изменить
                </Button>
              </Row>
            </Col>
          </Row>
          <Row className='page-main__row' gutter={20}>
            <Col span={4}>
              <Category/>
              <Button className='category-extra-btn' type={'link'}>Без категории</Button>
            </Col>
            <Col style={{textAlign:'center'}} span={2}>
              <Row className='item-id'>4</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={6}>
              <Row className='item-name'>Товар 4</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={3}>
              <Row className='item-whole-price'>2200</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={3}>
              <Row className='item-price'>2700</Row>
            </Col>
            <Col style={{textAlign:'center'}} span={6}>
              <Row type='flex' justify='space-around'>
                <Button className="page-main__edit-category-btn" type="primary">
                  Удалить
                </Button>
                <Button className="page-main__edit-category-btn" type="primary">
                  Изменить
                </Button>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

