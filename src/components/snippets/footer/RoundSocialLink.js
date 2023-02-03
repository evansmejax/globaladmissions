import React from "react";
import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";
import { useRoundSocialLinkStyles } from "@mui-treasury/styles/socialLink/round";
import styled from "styled-components";

export const RoundSocialLinkStyle = React.memo(function RoundSocialLink() {
  return (
    <>
      <SocialProvider useStyles={useRoundSocialLinkStyles}>
        <SocialWrapper>
          <SocialLink brand={"LinkedIn"} href={"#"} />
          <SocialLink brand={"Whatsapp"} href={"#"} />
          <SocialLink brand={"Facebook"} href={"#"} />
          <SocialLink brand={"Twitter"} href={"#"} />
        </SocialWrapper>
      </SocialProvider>
    </>
  );
});

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
`;
