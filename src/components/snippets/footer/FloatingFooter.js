import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveBlog, setActiveBlog } from "features/activeBlogSlice";

const FloatingFooter = () => {
  let activeProgram = useSelector(selectActiveBlog);
  let dispatch = useDispatch();
  return (
    <BlogMenuContainer>
      <MenuWrapper className="col-12">
        <Item
          onClick={(e) => {
            dispatch(setActiveBlog("programs"));
          }}
          active={activeProgram === "programs"}
        >
          <img alt="" src="/globaladmissions/images/sidebar/search.png" />
          <span>Programs</span>
        </Item>
        <Item
          onClick={(e) => {
            dispatch(setActiveBlog("blog"));
          }}
          active={activeProgram === "blog"}
        >
          <img alt="" src="/globaladmissions/images/sidebar/guide.png" />
          <span>Blog</span>
        </Item>
        <Item
          onClick={(e) => {
            dispatch(setActiveBlog("applications"));
          }}
          active={activeProgram === "applications"}
        >
          <img alt="" src="/globaladmissions/images/sidebar/application.png" />
          <span>My Applications</span>
        </Item>

        <Item
          onClick={(e) => {
            dispatch(setActiveBlog("support"));
          }}
          active={activeProgram === "support"}
        >
          <img alt="" src="/globaladmissions/images/sidebar/support.png" />
          <span>Support</span>
        </Item>
      </MenuWrapper>
    </BlogMenuContainer>
  );
};

export default FloatingFooter;

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
