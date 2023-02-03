import styled from "styled-components";
import ArticleItem from "./ArticleItem";
import NewsItem from "./NewsItem";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveBlogCategories,
  setActiveBlogCategories,
} from "features/activeBlogCategoriesSlice";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PaginationSize from "./Pagination";
const MoreHorizIconCustom = styled(MoreHorizIcon)`
  cursor: pointer;
`;

const KeyboardArrowRightIconCustom = styled(KeyboardArrowRightIcon)`
  padding: 3px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-right: 3px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.09);
  }
`;

const KeyboardArrowLeftIconCustom = styled(KeyboardArrowLeftIcon)`
  padding: 3px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-right: 3px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.09);
  }
`;

const newsItems = [
  {
    title: "9 fascinating things about christmans",
    program: "case study",
    image: "/images/news/n1.png",
    author: "Christine Chiu",
    date: "Nov 24, 2022",
    length: "8 min read",
    blogItem: "case-study",
  },
  {
    title: "9 fascinating things about christmans",
    program: "programs",
    image: "/images/news/n2.png",
    author: "Christine Chiu",
    date: "Nov 24, 2022",
    length: "8 min read",
    blogItem: "programs",
  },
  {
    title: "9 fascinating things about christmans",
    program: "MBBS",
    image: "/images/news/n3.png",
    author: "Christine Chiu",
    date: "Nov 24, 2022",
    length: "8 min read",
    blogItem: "mbbs",
  },
  {
    title: "9 fascinating things about christmans",
    program: "MBA",
    image: "/images/news/n4.png",
    author: "Christine Chiu",
    date: "Nov 24, 2022",
    length: "8 min read",
    blogItem: "mba",
  },
  {
    title: "9 fascinating things about christmans",
    program: "case study",
    image: "/images/news/n5.png",
    author: "Christine Chiu",
    date: "Nov 24, 2022",
    length: "8 min read",
    blogItem: "case-study",
  },
];

const articleItems = [
  {
    title: "9 fascinating things about christmans",
    program: "case study",
    image: "/images/articles/p1.png",
    author: "Christine Chiu",
    date: "Nov 24, 2022",
    length: "8 min read",
    blogItem: "case-study",
  },
  {
    title: "9 fascinating things about christmans",
    program: "programs",
    image: "/images/articles/p2.png",
    author: "Christine Chiu",
    date: "Nov 24, 2022",
    length: "8 min read",
    blogItem: "programs",
  },
];

function Blogs() {
  let dispatch = useDispatch();
  let activeCategories = useSelector(selectActiveBlogCategories);
  console.log(activeCategories);
  function handleToggleActiveCategory(category) {
    if (activeCategories.includes(category)) {
      dispatch(
        setActiveBlogCategories(
          activeCategories.filter(
            (activeCategory) => activeCategory !== category
          )
        )
      );
    } else {
      dispatch(setActiveBlogCategories([...activeCategories, category]));
    }
  }
  return (
    <div className="row">
      <div className="col-12 px-4">
        <div className="row">
          <div className="col-12 pt-3">
            <TitleWrapper>
              <Title>Recent Article</Title>
              <span>
                <KeyboardArrowLeftIconCustom />
                <KeyboardArrowRightIconCustom />
              </span>
            </TitleWrapper>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                {articleItems.map((d) => {
                  return <ArticleItem data={d} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Title>All News</Title>
          </div>
          <CategoryBar>
            <Category
              onClick={(e) => {
                handleToggleActiveCategory("case-study");
              }}
              active={activeCategories.includes("case-study")}
            >
              Case Study
            </Category>
            <Category
              onClick={(e) => {
                handleToggleActiveCategory("programs");
              }}
              active={activeCategories.includes("programs")}
            >
              Programs
            </Category>
            <Category
              onClick={(e) => {
                handleToggleActiveCategory("mbbs");
              }}
              active={activeCategories.includes("mbbs")}
            >
              Mbbs
            </Category>
            <Category
              onClick={(e) => {
                handleToggleActiveCategory("mba");
              }}
              active={activeCategories.includes("mba")}
            >
              Mba
            </Category>
            <Category
              onClick={(e) => {
                handleToggleActiveCategory("universities");
              }}
              active={activeCategories.includes("universities")}
            >
              Universities
            </Category>
            <Category>
              <MoreHorizIconCustom />
            </Category>
          </CategoryBar>
          <div className="row">
            <div className="col-12">
              <div className="row">
                {newsItems.map((d) => {
                  return <NewsItem data={d} />;
                })}

                <CovidBlock>
                  <span>
                    Foreigners guide to covid 19 Vaccination in Shangai
                  </span>

                  <Btn style={{ textTransform: "capitalize" }}>Read More</Btn>
                </CovidBlock>

                {newsItems.map((d) => {
                  return <NewsItem data={d} />;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <PaginationWrapper className="col-12">
            <span>Showing 1 to 20 of 120 results</span>
            <PaginationSize />
          </PaginationWrapper>
        </div>
        <div className="row">
          <div className="col-12">
            <Title>Categories</Title>
            <div className="row">
              <CategoryWrapper className="col-12 py-4">
                <CategoryItem>
                  <CategoryBox style={{ background: "url('/images/c1.png')" }}>
                    <img alt="" src="/images/categories/v1.png" />
                  </CategoryBox>
                  <CategoryDescription>MBA</CategoryDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryBox style={{ background: "url('/images/c2.png')" }}>
                    <img alt="" src="/images/categories/v2.png" />
                  </CategoryBox>
                  <CategoryDescription>MBBS</CategoryDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryBox style={{ background: "url('/images/c3.png')" }}>
                    <img alt="" src="/images/categories/v3.png" />
                  </CategoryBox>
                  <CategoryDescription>Universities</CategoryDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryBox style={{ background: "url('/images/c4.png')" }}>
                    <img alt="" src="/images/categories/v4.png" />
                  </CategoryBox>
                  <CategoryDescription>Student Experiences</CategoryDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryBox style={{ background: "url('/images/c5.png')" }}>
                    <img alt="" src="/images/categories/v5.png" />
                  </CategoryBox>
                  <CategoryDescription>Language programs</CategoryDescription>
                </CategoryItem>
              </CategoryWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Category = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.09);
  padding: 4px 2px;
  flex: 1;
  margin: 4px 4px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  min-width: 100px;
  background: ${(props) => (props.active ? `blue` : `white`)};
  color: ${(props) => (props.active ? `white` : ``)};
`;

const CategoryBar = styled.div`
  padding: 2px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 24px 5px;
  gap: 10px;
  border: none;
  background: radial-gradient(
    62.26% 123.96% at 69.08% 44.79%,
    #1d4ed8 0%,
    #1741b7 100%
  ) !important;
  box-shadow: 0px 4px 8px rgba(2, 14, 47, 0.1), inset 0px 1px 0px #1741b7,
    inset 0px 2px 0px rgba(255, 255, 255, 0.13),
    inset -1px -1px 0px rgba(5, 17, 57, 0.1);
  border-radius: 8px;
  color: white;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CovidBlock = styled.div`
  width: 100%;
  padding: 20px;
  background: url("/images/slides/slide1.png");
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  line-height: 28px;
  span {
    color: #dbeafe;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0px 4px;
`;

const CategoryItem = styled.div`
  margin: 0px 10px;
`;
const CategoryBox = styled.div`
  height: 100px;
  width: 100px;
  background: rgba(0, 0, 0, 0.09);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-size: cover;
`;
const CategoryDescription = styled.div`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #334155;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  border-radius: 6px;
  margin: 1px 0px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #334155;
`;
