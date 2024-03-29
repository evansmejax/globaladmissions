import styled from "styled-components";

function NewsItem(props) {
  return (
    <BlogDiv className="col-12 col-sm-6 col-md-4 my-1 p-3">
      <div className="row">
        <Wrapper className="col-12 p-3 bg-white">
          <ImageDiv>
            <img
              loading="lazy"
              className="w-100"
              src={`${props.data.image}`}
              alt=""
            />
          </ImageDiv>

          <Title className={`${props.data.blogItem} blogItem`}>
            <span>{props.data.program}</span>
          </Title>
          <SubTitle>{props.data.title}</SubTitle>
          <BottonSection>
            <ImageContainer>
              <Img src={props.data.authorImg} alt="" />
            </ImageContainer>
            <AuthorDetail>
              <AuthorSpan>{props.data.author}</AuthorSpan>
              <DateSpan>
                {props.data.date} . {props.data.length}
              </DateSpan>
            </AuthorDetail>
          </BottonSection>
        </Wrapper>
      </div>
    </BlogDiv>
  );
}

export default NewsItem;

const AuthorSpan = styled.span``;
const DateSpan = styled.span``;

const AuthorDetail = styled.div`
  span {
    display: block;
  }
  span:first-child {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #334155;
  }
  span:last-child {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px !important;
    line-height: 20px;
    color: #64748b;
  }
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const Title = styled.span``;

const SubTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  olor: #0f172a;
`;

const BottonSection = styled.div`
  display: flex;
  font-size: 12px;
  margin: 4px 0px;
`;

const Img = styled.img`
  height: 30px !important;
  width: 30px !important;
  border-radius: 50%;
`;

const BlogDiv = styled.div`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);
`;

const ImageDiv = styled.div`
  height: 200px;
  border-radius: 20px;
  margin-bottom: 10px;
  img {
    height: 100px;
  }
`;

const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: none !important;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  background: rgba(0, 0, 0, 0.02) !important;
  box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75) !important;
  -webkit-box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .blogItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 93px;
    height: 27px;
    background: #e0e7ff;
    border-radius: 40px;
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #3730a3;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }
  .case-study {
    background: #e0e7ff;
    span {
      color: #3730a3;
    }
  }
  .programs {
    background: #ffedd5;
    span {
      color: #9a3412;
    }
  }
  .mbbs {
    background: #dcfce7;
    span {
      color: #166534;
    }
  }
  .mba {
    background: #fef9c3;
    span {
      color: #92400e;
    }
  }
`;
