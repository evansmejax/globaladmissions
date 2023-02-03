import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PopularItem() {
  return (
    <div className="row">
      <Container className="col-12 py-1">
        <Item>
          <Img
            style={{ width: "30px", borderRadius: "50%" }}
            src="/images/student.png"
            alt=""
          />
          <ArticleItem>
            <Link to="/">
              <div>China Scholarship - The 2023 guide for students</div>
            </Link>
            <span>Nov 24 2023</span>
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
      color: blue;
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
  width: 30px;
  height: 30px;
`;

export default PopularItem;
