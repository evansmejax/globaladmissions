import { Link } from "react-router-dom";
import styled from "styled-components";

function PopularItem(props) {
  return (
    <div className="row">
      <Container className="col-12 py-1">
        <Item>
          <Img src={props.data.image} alt="" />
          <ArticleItem>
            <Link to="/globaladmissions/">
              <div>{props.data.title}</div>
            </Link>
            <span>{props.data.date}</span>
          </ArticleItem>
        </Item>
      </Container>
    </div>
  );
}

const Container = styled.div``;

const ArticleItem = styled.div`
  span {
    font-weight: 400;
    font-size: 12px;
    color: #64748b;
  }
  a {
    text-decoration: none;
    color: #334155;
    font-size: 14px;
    &:hover {
      color: var(--bs-blue);
    }
  }
`;

const Item = styled.div`
  display: flex;
  border-radius: 20px;
  margin: 2px 0px;
  padding: 2px;
  font-size: 12px;
`;

const Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  margin-right: 5px;
`;

export default PopularItem;
