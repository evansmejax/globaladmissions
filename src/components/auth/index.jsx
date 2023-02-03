import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "../snippets/footer";
import Header from "../snippets/header";
import LeftSideBar from "../snippets/sidebar/LeftSidebar";
import RightSideBar from "../snippets/sidebar/RightSidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveBlog, setActiveBlog } from "features/activeBlogSlice";

const Auth = () => {
  let activeProgram = useSelector(selectActiveBlog);
  let dispatch = useDispatch();
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContent>
        <LeftComponent>
          <LeftSideBar />
        </LeftComponent>
        <MainComponent>
          <Outlet />
          <Footer />
        </MainComponent>
        <RightComponent>
          <RightSideBar />
        </RightComponent>
      </MainContent>
      <BlogMenuContainer>
        <MenuWrapper className="col-12">
          <Item
            onClick={(e) => {
              dispatch(setActiveBlog("programs"));
            }}
            active={activeProgram === "programs"}
          >
            <img alt="" src="/images/sidebar/search.png" />
            <span>Programs</span>
          </Item>
          <Item
            onClick={(e) => {
              dispatch(setActiveBlog("blog"));
            }}
            active={activeProgram === "blog"}
          >
            <img alt="" src="/images/sidebar/guide.png" />
            <span>Blog</span>
          </Item>
          <Item
            onClick={(e) => {
              dispatch(setActiveBlog("applications"));
            }}
            active={activeProgram === "applications"}
          >
            <img alt="" src="/images/sidebar/application.png" />
            <span>My Applications</span>
          </Item>

          <Item
            onClick={(e) => {
              dispatch(setActiveBlog("support"));
            }}
            active={activeProgram === "support"}
          >
            <img alt="" src="/images/sidebar/support.png" />
            <span>Support</span>
          </Item>
        </MenuWrapper>
      </BlogMenuContainer>
    </Container>
  );
};

export default Auth;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
`;

const Item = styled.div`
  width: 100px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 1px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: ${(props) =>
    props.active
      ? `3px solid
    black`
      : `none`};
  span {
    margin-left: 10px;
    font-size: 11px;
    color: ${(props) => (props.active ? `blue` : `#475569`)};
  }
  img {
    height: 20px;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.03);
    span {
      color: blue;
    }
  }
`;

const MainContent = styled.div`
  height: 90vh;
  display: flex;
  padding-bottom: 20px;
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
const BlogMenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 90;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background: white;
  @media (max-width: 800px) {
    display: block;
  }
`;
