import React from "react";
import { Layout,} from "antd";
const { Header, Content } = Layout;

class ProductComponent extends React.Component {
  render() {
    const { product } = this.props.match.params;

    return (
      <div>
      <Layout className="landing-page">
        <Header className="landing-page__header">
          <h1 className="landing-page__title">{product.name}</h1>
        </Header>
      </Layout>
      <Layout>
        <Content className="Product-info">
          <h2>Информация о товаре</h2>
          <div className="Product-image-container">
            <div>
              <img style={{width: "100%", height: "auto"}} alt="Картинка товара" src={`${product.imgUrl}`}/>
            </div>
          </div>
          <p>{product.description}</p>
        </Content>
      </Layout>
      </div>
    );
  }
}

export default ProductComponent
