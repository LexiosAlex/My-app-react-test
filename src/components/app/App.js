import React from "react";
import "./App.css";
import { Layout, Row, Col, Button, Table } from "antd";
import Category from "../category/Category.js";
import ModalWindow from "../modalWindow/ModalWindow.js";

const ButtonGroup = Button.Group;
const { Header, Footer, Content, Sider } = Layout;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Название товара",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Цена / закуп",
    dataIndex: "wholePrice",
    key: "wholePrice"
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "",
    key: "action",
    render: () => (
      <Row type="flex" justify="space-around">
        <ModalWindow type={"item-delete"} id={3} />
        <ModalWindow type={"item-change"} id={3} />
      </Row>
    )
  }
];

const data = [
  {
    categoryName: "Мясо",
    categoryTitle: "meat",
    items: [
      {
        key: "1",
        id: "1",
        name: "Товар 1",
        wholePrice: "2200",
        price: "2500",
        category: "meat"
      },
      {
        key: "2",
        id: "2",
        name: "Товар 2",
        wholePrice: "2200",
        price: "2700",
        category: "meat"
      },
      {
        key: "3",
        id: "3",
        name: "Товар 3",
        wholePrice: "2200",
        price: "2700",
        category: "meat"
      },
      {
        key: "4",
        id: "4",
        name: "Товар 4",
        wholePrice: "2200",
        price: "2700",
        category: "meat"
      }
    ]
  },
  {
    categoryName: "Рыба",
    categoryTitle: "fish",
    items: [
      {
        key: "1",
        id: "1",
        name: "Товар 1",
        wholePrice: "2200",
        price: "2500",
        category: "fish"
      },
      {
        key: "2",
        id: "2",
        name: "Товар 2",
        wholePrice: "2200",
        price: "2700",
        category: "fish"
      },
      {
        key: "3",
        id: "3",
        name: "Товар 3",
        wholePrice: "2200",
        price: "2700",
        category: "fish"
      },
      {
        key: "4",
        id: "4",
        name: "Товар 4",
        wholePrice: "2200",
        price: "2700",
        category: "fish"
      }
    ]
  },
  {
    categoryName: "Овощи",
    categoryTitle: "vegetables",
    items: [
      {
        key: "1",
        id: "1",
        name: "Товар 1",
        wholePrice: "2200",
        price: "2500",
        category: "vegetables"
      },
      {
        key: "2",
        id: "2",
        name: "Товар 2",
        wholePrice: "2200",
        price: "2700",
        category: "vegetables"
      },
      {
        key: "3",
        id: "3",
        name: "Товар 3",
        wholePrice: "2200",
        price: "2700",
        category: "vegetables"
      },
      {
        key: "4",
        id: "4",
        name: "Товар 4",
        wholePrice: "2200",
        price: "2700",
        category: "vegetables"
      }
    ]
  },
  {
    categoryName: "Фрукты",
    categoryTitle: "fruits",
    items: [
      {
        key: "1",
        id: "1",
        name: "Товар 1",
        wholePrice: "2200",
        price: "2500",
        category: "fruits"
      },
      {
        key: "2",
        id: "2",
        name: "Товар 2",
        wholePrice: "2200",
        price: "2700",
        category: "fruits"
      },
      {
        key: "3",
        id: "3",
        name: "Товар 3",
        wholePrice: "2200",
        price: "2700",
        category: "fruits"
      },
      {
        key: "4",
        id: "4",
        name: "Товар 4",
        wholePrice: "2200",
        price: "2700",
        category: "fruits"
      }
    ]
  },
  {
    categoryName: "Без категории",
    categoryTitle: "noCategory",
    items: []
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ height: "auto" }} className="main-header">
            <Row gutter={20}>
              <Col span={4}>
                <a className="main-header__logo logo">
                  <p className="logo__name">My-app</p>
                </a>
              </Col>
              <Col span={12} push={4}>
                <div
                  style={{ paddingTop: "50px" }}
                  className="main-header__button-container"
                >
                  <ButtonGroup>
                    <ModalWindow type={"add-item"} id={3} />
                    <ModalWindow type={"add-category"} id={3} />
                  </ButtonGroup>
                </div>
              </Col>
            </Row>
          </Header>
          <Layout className="page-main">
            <Sider
              className="page-main__sidebar"
              style={{ background: "#f0f2f5" }}
            >
              <Row className="page-main__row" align={"bottom"} gutter={20}>
                <p className="visually-hidden">Категории</p>
              </Row>
              {data.map((it, i) => (
                <Category key={`city-${i}`} category={it} />
              ))}
            </Sider>
            <Content>
              <Table columns={columns} dataSource={data[0].items} />
            </Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
