import styled from "styled-components";
export const RoundSocialLinkStyle = () => {
  return (
    <>
      <Container>
        <a alt="" href="/globaladmissions/">
          <img alt="" src="/globaladmissions/images/social/fb.png" />
        </a>
        <a alt="" href="/globaladmissions/">
          <img alt="" src="/globaladmissions/images/social/instagram.png" />
        </a>
        <a alt="" href="/globaladmissions/">
          <img alt="" src="/globaladmissions/images/social/linkedin.png" />
        </a>
        <a alt="" href="/globaladmissions/">
          <img alt="" src="/globaladmissions/images/social/youtube.png" />
        </a>
        <a alt="" href="/globaladmissions/">
          <img alt="" src="/globaladmissions/images/social/twitter.png" />
        </a>
        <a alt="" href="/globaladmissions/">
          <img alt="" src="/globaladmissions/images/social/wechat.png" />
        </a>
      </Container>
    </>
  );
};

const Container = styled.div`
  a {
    margin: 0px 2px;
    border: 1px solid rgba(0, 0, 0, 0.01);
    padding: 4px;
    border-radius: 3px;
    img {
      height: 25px;
      width: 25px;
    }
  }
`;
