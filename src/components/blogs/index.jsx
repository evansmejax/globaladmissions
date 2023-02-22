import styled from "styled-components";
import ArticleItem from "./ArticleItem";
import NewsItem from "./NewsItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveBlogCategories,
  setActiveBlogCategories,
} from "features/activeBlogCategoriesSlice";
import { slice } from "lodash";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect, useState } from "react";
import newslist from "mockup/news";
import articleslist from "mockup/articles";
import lessnewslist from "mockup/lessnewslist";
import categorieslist from "mockup/categories";
import ScrollToTop from "components/snippets/footer/ScrollToTop";
import RightSideBar from "components/snippets/sidebar/RightSidebar";
import QuickMenu from "./QuickMenu";

const MoreHorizIconCustom = styled(MoreHorizIcon)`
  cursor: pointer;
`;

const ArrowWrapper = styled.span`
  height: 32px;
  width: 32px;
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-right: 3px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.09);
  }
  img {
    height: 10px;
    width: 5px;
  }
`;

function Blogs() {
  const [activeArticleCount, setActiveArticleCount] = useState(0);
  const [activeCategoryCount, setActiveCategoryCount] = useState(0);
  const [post, setPost] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(3);
  const initialPosts = slice(post, 0, index);
  const getData = () => {
    setPost(newslist);
  };
  const loadMore = () => {
    setIndex(index + 3);
    console.log(index);
    if (index >= post.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  function increment() {
    let newCount = activeArticleCount + 1;
    if (newCount !== articleslist.length) {
      const newActive = newCount % articleslist.length;
      setActiveArticleCount(Math.abs(newActive));
    }
  }
  function decrement() {
    let newCount = activeArticleCount - 1;
    if (newCount !== -1) {
      const newActive = newCount % articleslist.length;
      setActiveArticleCount(Math.abs(newActive));
    }
  }

  function incrementCategory() {
    let newCount = activeCategoryCount + 2;
    if (newCount <= categorieslist.length - 1) {
      setActiveCategoryCount(Math.abs(newCount));
    }
  }
  function decrementCategory() {
    let newCount = activeCategoryCount - 2;
    if (newCount >= 0) {
      // const newActive = newCount % 2;
      setActiveCategoryCount(Math.abs(newCount));
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
          <div className="col-12 pt-3 d-none d-md-block">
            <TitleWrapper>
              <SectionTitle>Blog</SectionTitle>
            </TitleWrapper>
          </div>
          <div className="col-12 pt-3">
            <TitleWrapper>
              <Title>Recent Article</Title>

              <span>
                <ArrowWrapper
                  onClick={(e) => {
                    increment();
                  }}
                >
                  <img alt="" src="/globaladmissions/images/arrowleft.png" />
                </ArrowWrapper>
                <ArrowWrapper
                  onClick={(e) => {
                    decrement();
                  }}
                >
                  <img alt="" src="/globaladmissions/images/arrowright.png" />
                </ArrowWrapper>
              </span>
            </TitleWrapper>
          </div>

          <div className="row d-block d-md-none">
            <div className="col-12">
              <div className="row">
                <ArticleItem data={articleslist[activeArticleCount]} />
              </div>
            </div>
          </div>

          <div className="row d-none d-md-block">
            <div className="col-12">
              <div className="row">
                {articleslist.map((d) => {
                  return <ArticleItem data={d} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TitleWrapper>
              <Title>Categories</Title>
              <span>
                <ArrowWrapper
                  onClick={(e) => {
                    decrementCategory();
                  }}
                >
                  <img alt="" src="/globaladmissions/images/arrowleft.png" />
                </ArrowWrapper>
                <ArrowWrapper
                  onClick={(e) => {
                    incrementCategory();
                  }}
                >
                  <img alt="" src="/globaladmissions/images/arrowright.png" />
                </ArrowWrapper>
              </span>
            </TitleWrapper>

            <div className="row d-none d-md-block">
              <CategoryWrapper className="col-12 py-4">
                {categorieslist.map((cat) => {
                  return (
                    <CategoryItem>
                      <CategoryBox
                        style={{
                          background: `url(${cat.bg})`,
                        }}
                      >
                        <img alt="" src={cat.image} />
                      </CategoryBox>
                      <CategoryDescription>{cat.program}</CategoryDescription>
                    </CategoryItem>
                  );
                })}
              </CategoryWrapper>
            </div>
            <div className="row d-block d-md-none">
              <CategoryWrapper className="col-12 py-4">
                {categorieslist
                  .slice(activeCategoryCount, activeCategoryCount + 2)
                  .map((cat) => {
                    return (
                      <CategoryItem>
                        <CategoryBox
                          style={{
                            background: `url(${cat.bg})`,
                          }}
                        >
                          <img alt="" src={cat.image} />
                        </CategoryBox>
                        <CategoryDescription>{cat.program}</CategoryDescription>
                      </CategoryItem>
                    );
                  })}
              </CategoryWrapper>
              <ScrollWrapper>
                <ScrollToTop />
              </ScrollWrapper>
            </div>
          </div>
        </div>

        <div className="row d-block d-md-none">
          <div className="col-12 py-3">
            <QuickMenu />
            <RightSideBar />
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
                {lessnewslist.map((d) => {
                  return <NewsItem data={d} />;
                })}

                <CovidBlock>
                  <img
                    className="logo-icon1"
                    alt=""
                    src="/globaladmissions/images/logo-group.png"
                  />
                  <img
                    className="logo-icon2"
                    alt=""
                    src="/globaladmissions/images/logo-group.png"
                  />
                  <img
                    className="logo-icon3"
                    alt=""
                    src="/globaladmissions/images/logo-group.png"
                  />
                  <img
                    className="logo-icon4"
                    alt=""
                    src="/globaladmissions/images/logo-group.png"
                  />
                  <img
                    className="logo-icon5"
                    alt=""
                    src="/globaladmissions/images/logo-group.png"
                  />
                  <img
                    className="logo-icon6"
                    alt=""
                    src="/globaladmissions/images/logo-group.png"
                  />
                  <span>
                    <LeftSection>
                      <UpperPart className="apply">
                        Apply to universities
                      </UpperPart>
                      <LowerPart>
                        <span className="online">ONLINE</span>
                        <img alt="" src="/globaladmissions/images/online.png" />
                      </LowerPart>
                    </LeftSection>
                  </span>

                  <Btn style={{ textTransform: "capitalize" }}>Apply Now</Btn>
                </CovidBlock>
                <SchoolIconsWrapper></SchoolIconsWrapper>

                {initialPosts.map((item, id) => {
                  return <NewsItem data={item} />;
                })}
                <div className="text-center mt-3 mb-5">
                  {isCompleted ? (
                    <></>
                  ) : (
                    <MoreBtn onClick={loadMore}>Show More </MoreBtn>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

const ScrollWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -30px;
`;

const LeftSection = styled.div``;
const LowerPart = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    margin-left: 10px;
  }
  span:first-child {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    color: #ffffff;
  }
  img {
  }
`;
const UpperPart = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #bfdbfe;
`;

const MoreBtn = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: white;
  &:hover {
    color: var(--bs-blue);
  }
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
  background: ${(props) => (props.active ? `var(--bs-blue)` : `white`)};
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
  flex-wrap: wrap;
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
  position: relative;
  width: 100%;
  padding: 20px;
  background: url("/globaladmissions/images/slides/slide1.png");
  background-size: cover;
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
  .logo-icon1 {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .logo-icon2 {
    position: absolute;
    top: 55%;
    left: 55%;
  }
  .logo-icon3 {
    position: absolute;
    top: 45%;
    left: 58%;
  }
  .logo-icon4 {
    position: absolute;
    top: 58%;
    left: 58%;
  }
  .logo-icon5 {
    position: absolute;
    top: 27%;
    left: 79%;
  }
  .logo-icon6 {
    position: absolute;
    top: 82%;
    left: 88%;
  }
  @media (max-width: 800px) {
    font-size: 30px;
    padding: 20px;
    flex-direction: column;
    button {
      margin-top: 10px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    .apply {
      font-size: 30px !important;
      padding: 20px 0px;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
    }
    .online {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

const SchoolIconsWrapper = styled.div`
  background: red;
`;

const CategoryWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px 4px;
`;

const CategoryItem = styled.div`
  margin: 5px 10px;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
  }
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
  padding: 5px 0px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  border-radius: 6px;
  margin: 1px 0px;
  line-height: 32px;
  color: #334155;
`;

const SectionTitle = styled.div`
  margin: 1px 0px;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #0f172a;
`;
