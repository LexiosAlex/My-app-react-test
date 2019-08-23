import React from "react";
import "./LandingPage.css";
import { withRouter} from "react-router";
import { Layout, Button, Menu, Card, Spin } from "antd";
import {Link} from "react-router-dom";
const { Header, Content } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

class LandingPage extends React.Component {
  state = {
    activeCategoryId: 0,
    activePage: 1
  };

  componentDidMount() {
    const { onGetCategories, onGetProducts } = this.props;
    onGetCategories();
    onGetProducts(this.state.activeCategoryId, this.state.activePage);
  }

  render() {
    console.log(this.props);
    const { categories, productsData, onGetProducts } = this.props;
    return (
      <div>
        <Layout className="landing-page">
          <Header className="landing-page__header">
            <div className="landing-page__title">Галлерея</div>
            <Menu theme="dark" mode="horizontal" className="landing-page__menu">
              <SubMenu
                key="sub1"
                className="landing-page__sub-menu"
                title={<span>Выбор категории </span>}
              >
                {categories.isLoading ? (
                  <Spin size={"large"} tip="Загрузка категорий..." />
                ) : (
                  categories.list.map((it, i) => (
                    <Menu.Item
                      key={`category-menu-${i}`}
                      page={this.state.activePage}
                      onClick={() => {
                        onGetProducts(it.id, this.state.activePage);
                      }
                      }
                    >{`${it.categoryName}`}</Menu.Item>
                  ))
                )}
              </SubMenu>
            </Menu>
            <Button
              className="landing-page__enter-button"
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              Войти
            </Button>
          </Header>
        </Layout>
        <Layout>
          <Content className="landing-content">
            <h2 className="landing-page__title--main">
              Товары категории
              <span>{`${
                categories.list.length > 0
                  ? categories.list[this.state.activeCategoryId].categoryName
                  : ""
              }`}</span>
            </h2>
            <div className="items-container">
              {productsData.isLoading ? (
                <Spin size={"large"} tip="Загрузка товаров..." />
              ) : (
                productsData.list.map((it, i) => (
                  <Card
                    key={`item-card-${i}`}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt={`Картинка товара ${it.name}`}
                        src={`${it.imgUrl}`}
                      />
                    }
                  >
                    <Meta
                      title={`${it.name}`}
                      description={`${it.price} руб`}
                    />
                    <Link to={{
                      path: `/product/${it.id}`,
                      state: {
                      product: it,
                    }}
                    }>
                      Подробнее
                    </Link>
                  </Card>
                ))
              )}
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default withRouter(LandingPage);
