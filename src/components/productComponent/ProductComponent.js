import React from "react";
import { Layout } from "antd";
import "./ProductComponent.css"
const { Header, Content } = Layout;

class ProductComponent extends React.Component {
  componentDidMount() {
    const { getProductById } = this.props;
    const { id } = this.props.match.params;
    console.log(id);

    getProductById(id);
  }

  render() {
    const { data } = this.props;

    console.log(data);
    return (
      <div>
        <Layout className="product-page">
          <Header className="product-page__header">
            <h1 className="product-page__title">{data.product.name}</h1>
          </Header>
        </Layout>
        <Layout>
          <Content className="product-info">
            <h2>Информация о товаре</h2>
            <div className="product-page__img-container">
              <div style={{backgroundColor: "#08080"}}>
                {data.product.imgUrl ? (
                  <img
                    style={{ width: "100%", height: "auto" }}
                    alt="Картинка товара"
                    src={`${data.product.imgUrl}`}
                  />
                ) : (
                  <p className="product-page__img--404">no image available </p>
                )}
              </div>
            </div>
            <p>{data.product.description ? data.product.description : "no description"}</p>
            <div>
              <p className="product-page__price-title">Цена</p>
              <p className="product-page__price">{data.product.price}</p>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default ProductComponent;
