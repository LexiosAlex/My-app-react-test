import React from "react";
import "./LandingPage.css"
import { Layout, Button, Menu, Card } from "antd";
const { Header, Content } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Layout className="landing-page">
          <Header className="landing-page__header">
            <div className="landing-page__title">Галлерея</div>
            <Menu
            theme="dark"
            mode="horizontal"
            className="landing-page__menu"
            >
              <SubMenu
                key="sub1"
                className="landing-page__sub-menu"
                title={
                    <span>Выбор категории</span>
                }
              >
                <Menu.Item key="1">Без категории</Menu.Item>
                <Menu.Item key="2">Категория 1</Menu.Item>
              </SubMenu>
            </Menu>
            <Button className="landing-page__enter-button">Войти</Button>
          </Header>
        </Layout>
        <Layout>
          <Content className="landing-content">
            <h2 className="landing-page__title--main">Товары категории</h2>
            <div className="items-container">
              <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
              <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
              <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default LandingPage;
