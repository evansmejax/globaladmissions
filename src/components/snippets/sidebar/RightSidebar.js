import React from "react";
import styled from "styled-components";
import PopularItem from "./PopularItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Card, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

function RightSideBar() {
  return (
    <div className="row">
      <div className="col-12 px-3">
        <PopularCard>
          <Title>Popular this week</Title>
          <PopularItem />
          <PopularItem />
          <PopularItem />
          <PopularItem />
          <PopularItem />
          <ShowMore>
            <KeyboardArrowDownIconCustom />
            <span className="px-2">Show More</span>
          </ShowMore>
        </PopularCard>
        <SignupCard>
          <LoginIcon />
          <div>
            <Typography variant="body1">Signup</Typography>
            <Typography variant="body2">for newsletter</Typography>
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

const KeyboardArrowDownIconCustom = styled(KeyboardArrowDownIcon)`
  cursor: pointer;
`;

const SignupCard = styled(Card)`
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
`;

const PopularCard = styled(Card)`
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 10px 3px;
  margin-top: 30px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75) !important;
  -webkit-box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
