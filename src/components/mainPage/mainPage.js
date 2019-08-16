import React from "react";
import "./mainPage.css";
import { Layout, Row, Col, Button, Table, Spin } from "antd";
import { Redirect } from "react-router-dom";
import filterActiveCategoryItems from "../../filterActiveCategoryItems.js";
import Category from "../category/Category.js";
import ModalAddCategory from "../modalAddCategory/ModalAddCategory.js";
import ModalAddItem from "../modalAddItem/ModalAddItem.js";
import ModalChangeItem from "../modalChangeItem/ModalChangeItem.js";
import ModalDeleteItem from "../modalDeleteItem/ModalDeleteItem.js";

const ButtonGroup = Button.Group;
const { Header, Footer, Content, Sider } = Layout;

class MainPage extends React.Component {
  state = {
    activeCategoryId: 1,
    activePage: 1
  };

  componentDidMount() {
    const { onGetCategories, onGetProducts } = this.props;
    onGetCategories();
    onGetProducts(this.state.activeCategoryId, this.state.activePage);
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
              page={this.state.activePage}
              activeCategory={this.state.activeCategoryId}
            />
            <ModalChangeItem
              product={product}
              categories={categories.list}
              onChangeProduct={onChangeProduct}
              page={this.state.activePage}
              activeCategory={this.state.activeCategoryId}
            />
          </Row>
        )
      }
    ];
  }

  onChangeCategory = id => {
    const { onGetProducts } = this.props;
    this.setState({ activeCategoryId: id });
    onGetProducts(id, this.state.activePage);
  };

  render() {
    console.log(this.props);
    const {
      categories,
      productsData,
      onAddCategory,
      onDeleteCategory,
      onAddProduct,
      loginStatus,
      onChangeLoginStatus
    } = this.props;

    if (!loginStatus) {
      return <Redirect push to="/login" />;
    }

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
                      activeCategoryId={this.state.activeCategoryId}
                      activePage={this.state.activePage}
                    />
                    <ModalAddCategory addCategoryHandle={onAddCategory} />
                  </ButtonGroup>
                </div>
              </Col>
              <Col span={3} push={5} >
                <div style={{ paddingTop: "47px" }}>
                  <Button
                    className="button-header"
                    type="primary"
                    onClick={() => {
                      onChangeLoginStatus(false);
                    }}
                  >
                    Выйти
                  </Button>
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
              {categories.isLoading ? (
                <Spin size={"large"} tip="Загрузка категорий..." />
              ) : (
                categories.list.map((it, i) => (
                  <Category
                    key={`category-${i}`}
                    category={it}
                    changeCategory={this.onChangeCategory}
                    onDeleteCategory={onDeleteCategory}
                    activeCategory={this.state.activeCategoryId}
                    page={this.state.activePage}
                  />
                ))
              )}
            </Sider>
            <Content>
              {productsData.isLoading ? (
                <Spin size={"large"} tip="Загрузка товаров..." />
              ) : (
                <Table
                  columns={this.getColumns()}
                  dataSource={filterActiveCategoryItems(
                    this.state.activeCategoryId,
                    productsData.list
                  )}
                />
              )}
            </Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
    );
  }
}

export default MainPage;
