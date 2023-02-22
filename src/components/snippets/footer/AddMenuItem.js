import styled from "styled-components";

const AddMenuItem = () => {
  return (
    <BlogMenuContainer>
      <img alt="" src="/globaladmissions/images/add.png" />
    </BlogMenuContainer>
  );
};

export default AddMenuItem;

const BlogMenuContainer = styled.div`
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
