import styled from "styled-components";

const ScrollToTop = () => {
  function handleScrollToTop() {
    let scroll_to_bottom = document.getElementById("MainContentDiv");
    scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
  }
  return (
    <BlogMenuContainer
      onClick={(e) => {
        handleScrollToTop();
      }}
    >
      <img alt="" src="/globaladmissions/images/up.png" />
    </BlogMenuContainer>
  );
};

export default ScrollToTop;

const BlogMenuContainer = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1d4ed8;
  @media (max-width: 800px) {
  }
`;
