import styled from "styled-components";
import { RoundSocialLinkStyle } from "./RoundSocialLink";

const Footer = () => {
  return (
    <FooterDiv className="row py-3">
      <FooterWrapper className="col-12 px-5 py-3">
        <LinkItem
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Global Admissions © 2022-{new Date().getFullYear()}{" "}
        </LinkItem>

        <LinkItem
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Privacy Policy
        </LinkItem>
        <LinkItem
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Terms and Conditions
        </LinkItem>
        <RoundSocialLinkStyle />
      </FooterWrapper>
    </FooterDiv>
  );
};

const LinkItem = styled.div`
  cursor: pointer;
  color: #64748b;
  &:hover {
    color: var(--bs-blue);
  }
`;

const FooterDiv = styled.div`
  background: rgba(0, 0, 0, 0.08);
  margin-bottom: 30px !important;
  border-radius: 20px;
`;

const FooterWrapper = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Footer;
