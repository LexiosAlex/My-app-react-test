import React from "react";
import "./App.css";
import { Layout, Row, Col, Button, Table } from "antd";
import Category from "../category/Category.js";
import ModalAddCategory from "../modalAddCategory/ModalAddCategory.js";
import ModalAddItem from "../modalAddItem/ModalAddItem.js";
import ModalChangeItem from "../modalChangeItem/ModalChangeItem.js";
import ModalDeleteItem from "../modalDeleteItem/ModalDeleteItem.js";

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
        <ModalDeleteItem id={3} />
        <ModalChangeItem />
      </Row>
    )
  }
];

class App extends React.Component {
  render() {
    const { data } = this.props;
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
                    <ModalAddItem />
                    <ModalAddCategory />
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
              <Table columns={columns} dataSource={data[1].items} />
            </Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
