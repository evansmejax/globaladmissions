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
          <div>
            <ArticleLink to="/">
              <div variant="body">
                China Scholarship - The 2023 guide for students
              </div>
            </ArticleLink>
            <div variant="body">Nov 24 2023</div>
          </div>
        </Item>
      </Container>
    </div>
  );
}

const Container = styled.div``;

const ArticleLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: black;
  &:hover {
    color: blue;
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
