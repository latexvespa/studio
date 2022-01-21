import React from "react";
import { render } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { keys } from "lodash";
import Lines from "./pages/lissajous";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Home = () => {
  return <h1>Pick A Demo</h1>;
};

const MAP = {
  "/": { component: Home, name: "home" },
  "/lines": { component: Lines, name: "Lines" }
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: 80px 1fr 80px;
  min-height: 100vh;
`;

const Header = styled.header`
  grid-area: 1 / 1 / 2 / 3;
  background: grey;
  padding-left: 40px;
`;

const Sidebar = styled.div`
  grid-area: 2 / 1 / 4 / 2;
  background: lightGray;
`;

const Page = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background: #f6f6f6;
`;

const Footer = styled.footer`
  grid-area: 3 / 1 / 4 / 3;
  background: grey;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }

  getDemo() {
    const item = MAP[this.state.route] || {};
    return item.component || Home;
  }

  render() {
    const Child = this.getDemo();
    const routes = keys(MAP);
    return (
      <Wrapper>
        <GlobalStyle />
        <Header>
          <h1>Studio</h1>
        </Header>
        <Sidebar>
          <ul>
            {routes.map((route, index) => {
              const item = MAP[route] || {};
              return (
                <li key={index}>
                  <a href={`#${route}`}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </Sidebar>
        <Page>
          <React.StrictMode>
            <Child />
          </React.StrictMode>
        </Page>
        <Footer />
      </Wrapper>
    );
  }
}

render(<App />, document.getElementById("app-root"));
