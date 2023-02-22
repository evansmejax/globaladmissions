import styled from "styled-components";
import PopularList from "./PopularList";

function RightSideBar() {
  return (
    <div className="row">
      <div className="col-12">
        <PopularCard>
          <Title>Popular this week</Title>
          <PopularList />
        </PopularCard>
        <SignupCard>
          <img alt="" src="/globaladmissions/images/Login.png" />
          <div>
            <span variant="body1">Signup</span>
            <span variant="body2">for newsletter</span>
          </div>
          <Btn variant="contained">Signup</Btn>
        </SignupCard>
      </div>
    </div>
  );
}
export default RightSideBar;

const Title = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #64748b;
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

const SignupCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 10px 3px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.07);
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75) !important;
  -webkit-box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
  div {
    display: flex;
    flex-direction: column;
    span:first-child {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #334155;
    }
    span:last-child {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #64748b;
    }
  }
`;

const PopularCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 10px 8px;
  margin-top: 30px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75) !important;
  -webkit-box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
