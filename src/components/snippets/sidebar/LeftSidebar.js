import { selectActiveBlog, setActiveBlog } from "features/activeBlogSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function LeftSideBar() {
  let activeProgram = useSelector(selectActiveBlog);
  let dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-12 px-3">
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
      </div>
    </div>
  );
}

export default LeftSideBar;

const Item = styled.div`
  cursor: pointer;
  padding: 10px 5px;
  border-radius: 6px;
  margin: 1px 0px;
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => (props.active ? `blue` : `#475569`)};
  }
  &:hover {
    background: rgba(0, 0, 0, 0.03);
    span {
      color: blue;
    }
  }
`;
