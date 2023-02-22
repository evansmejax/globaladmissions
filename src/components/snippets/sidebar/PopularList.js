import { useEffect, useState } from "react";
import styled from "styled-components";
import { slice } from "lodash";
import popular from "mockup/popular";
import PopularItem from "./PopularItem";

function PopularList() {
  const [post, setPost] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(2);
  const initialPosts = slice(post, 0, index);
  const getData = () => {
    setPost(popular);
  };
  const loadMore = () => {
    setIndex(index + 1);
    console.log(index);
    if (index >= post.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {initialPosts.map((item, id) => {
        return <PopularItem data={item} />;
      })}
      <div className="text-center mt-3 mb-5">
        {isCompleted ? (
          <></>
        ) : (
          <ShowMore onClick={loadMore}>
            <img alt="" src="/globaladmissions/images/arrowup.png" />
            <span className="px-2">Show More</span>
          </ShowMore>
        )}
      </div>
    </div>
  );
}

export default PopularList;

const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`;
