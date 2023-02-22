import { useState } from "react";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";

function Searchbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCount, setActiveCount] = useState(0);
  const [count, setCount] = useState(877777);
  const [categories] = useState([
    {
      name: "Programs",
      img: "/globaladmissions/images/dropdown/university.png",
    },
    { name: "Blog", img: "/globaladmissions/images/sidebar/guide.png" },
    {
      name: "University",
      img: "/globaladmissions/images/sidebar/search.png",
    },
    {
      name: "Applications",
      img: "/globaladmissions/images/sidebar/application.png",
    },
    {
      name: "Support",
      img: "/globaladmissions/images/sidebar/support.png",
    },
  ]);
  function handSearch() {
    const params = {
      category: categories[activeCount].name,
      search_query: search,
    };
    const options = {
      pathname: "/globaladmissions/",
      search: `?${createSearchParams(params)}`,
    };
    navigate(options, { replace: true });
    setSearch("");
  }
  function increment() {
    let newCount = count + 1;
    const newActive = newCount % 5;
    setCount(newCount);
    setActiveCount(newActive);
  }
  function decrement() {
    let newCount = count - 1;
    const newActive = newCount % 5;
    setCount(newCount);
    setActiveCount(newActive);
  }
  return (
    <Container>
      <SearchBox>
        <SearchMenu>
          <span>
            <span className="d-none d-md-block">
              {categories[activeCount].name}{" "}
            </span>
            <span className="d-block d-md-none">
              <img className="" alt="" src={categories[activeCount].img} />
            </span>
          </span>
          <div className="py-2">
            <img
              onClick={(e) => {
                increment();
              }}
              alt=""
              src="/globaladmissions/images/arrowup.png"
            />
            <img
              onClick={(e) => {
                decrement();
              }}
              alt=""
              src="/globaladmissions/images/arrowup.png"
            />
          </div>
        </SearchMenu>
        <SearchBar>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="search"
            className="searchbar"
            value={search}
          />
        </SearchBar>
      </SearchBox>
      <SearchIcon>
        <img
          onClick={(e) => {
            handSearch();
          }}
          style={{ height: "20px", width: "20px", marginLeft: "-30px" }}
          alt="logo"
          src="/globaladmissions/images/search/search.png"
        />
      </SearchIcon>
    </Container>
  );
}
const SearchMenu = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  align-items: center;
  background: #f1f5f9;
  border: 1px solid rgba(0, 0, 0, 0.09) !important;
  border-right: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  span {
    font-weight: 500;
    color: #0f1d45;
    font-size: 14px;
  }
  div {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img:first-child {
      transform: rotate(180deg);
    }
    img:last-child {
    }
  }
`;
const SearchBar = styled.div`
  flex: 1;
  .searchbar {
    width: 100%;
    height: 100%;
    color: #64748b;
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
    padding: 0px 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.09) !important;
      border-radius: 0px;
    }
  }
  .searchbar:focus {
    outline: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

const SearchBox = styled.div`
  flex: 1;
  display: flex;
`;
const SearchIcon = styled.div`
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 5px;
`;
export default Searchbar;
