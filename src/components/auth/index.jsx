import styled from "styled-components";
import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";

const LeftSideBar = React.lazy(() => import("../snippets/sidebar/LeftSidebar"));
const RightSideBar = React.lazy(() =>
  import("../snippets/sidebar/RightSidebar")
);
const Footer = React.lazy(() => import("../snippets/footer"));
const Header = React.lazy(() => import("../snippets/header"));

const Auth = () => {
  return (
    <Container>
      <HeaderContainer>
        <Suspense fallback={<div>loading header</div>}>
          <Header />
        </Suspense>
      </HeaderContainer>
      <MainContent>
        <Suspense fallback={<div>loading left sidebar</div>}>
          <LeftComponent>
            <LeftSideBar />
          </LeftComponent>
        </Suspense>
        <MainComponent id="MainContentDiv">
          <Outlet />
          <Suspense fallback={<div>loading footer</div>}>
            <Footer />
          </Suspense>
        </MainComponent>
        <Suspense fallback={<div>loading right sidebar</div>}>
          <RightComponent>
            <RightSideBar />
          </RightComponent>
        </Suspense>
      </MainContent>
    </Container>
  );
};

export default Auth;

const MainContent = styled.div`
  height: 90vh;
  display: flex;
`;
const LeftComponent = styled.div`
  width: 10vw;
  @media (max-width: 800px) {
    display: none;
    width: 0vw;
  }
`;

const RightComponent = styled.div`
  width: 20vw;
  @media (max-width: 800px) {
    display: none;
    width: 0vw;
  }
`;

const MainComponent = styled.div`
  flex: 1;
  overflow: scroll;
  padding: 0px 30px;
  overflow-x: hidden;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  height: 100vh;
  postion: relative;
  overflow: hidden;
  padding: 0px 30px;
  @media (max-width: 800px) {
    padding: 0px 0px;
  }
`;

const HeaderContainer = styled.div`
  height: 10vh;
  postion: absolute;
`;
