import React from "react";
import "./App.css";
import { Layout, Row, Col, Button, Table } from "antd";
import filterActiveCategoryItems from "../../filterActiveCategoryItems.js";
import Category from "../category/Category.js";
import ModalAddCategory from "../modalAddCategory/ModalAddCategory.js";
import ModalAddItem from "../modalAddItem/ModalAddItem.js";
import ModalChangeItem from "../modalChangeItem/ModalChangeItem.js";
import ModalDeleteItem from "../modalDeleteItem/ModalDeleteItem.js";

const ButtonGroup = Button.Group;
const { Header, Footer, Content, Sider } = Layout;

class App extends React.Component {
  state = {
    activeCategoryId: 1
  };

  componentDidMount() {
    const { onGetCategories, onGetProducts } = this.props;
    onGetCategories();
    onGetProducts();
  }

  getColumns() {
    const { onDeleteProduct, onChangeProduct, categories } = this.props;
    return [
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
        render: product => (
          <Row type="flex" justify="space-around">
            <ModalDeleteItem
              product={product}
              onDeleteProduct={onDeleteProduct}
            />
            <ModalChangeItem
              product={product}
              categories={categories.list}
              onChangeProduct={onChangeProduct}
            />
          </Row>
        )
      }
    ];
  }

  onChangeCategory = id => {
    this.setState({ activeCategoryId: id });
  };

  render() {
    console.log(this.props);
    const {
      categories,
      productsData,
      onAddCategory,
      onDeleteCategory,
      onAddProduct
    } = this.props;
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
                    <ModalAddItem
                      onAddProduct={onAddProduct}
                      categories={categories.list}
                      products={productsData.list}
                    />
                    <ModalAddCategory
                      addCategoryHandle={onAddCategory}
                      categories={categories.list}
                    />
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
              {categories.list.map((it, i) => (
                <Category
                  key={`city-${i}`}
                  category={it}
                  changeCategory={this.onChangeCategory}
                  onDeleteCategory={onDeleteCategory}
                />
              ))}
            </Sider>
            <Content>
              <Table
                columns={this.getColumns()}
                dataSource={filterActiveCategoryItems(
                  this.state.activeCategoryId,
                  productsData.list
                )}
              />
            </Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
