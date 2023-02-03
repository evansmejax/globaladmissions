import styled from "styled-components";
import CustomizedInputBase from "./search";
function Header() {
  return (
    <Container className="col-12">
      <spanner>
        <img alt="logo" src="/images/logo.png" />
      </spanner>
      <SearchBar>
        <CustomizedInputBase />
      </SearchBar>
      <MenuItems>
        <BellImg alt="logo" src="/images/assets/bell.png" />

        <AccountImage>
          <img
            style={{ height: "25px", width: "25px" }}
            alt="logo"
            src="/images/student.png"
          />
        </AccountImage>

        <Btn size="small" variant="contained">
          <span>Get Started</span>
        </Btn>
      </MenuItems>
    </Container>
  );
}

export default Header;

const BellImg = styled.img`
  cursor: pointer;
`;

const AccountImage = styled.div`
  height: 35px;
  width: 35px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  cursor: pointer;
  padding: 3px;
  background: url(/images/student.png);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 3px;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: space-around;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
    width: 0vw;
  }
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
  );
  box-shadow: 0px 4px 8px rgba(2, 14, 47, 0.1), inset 0px 1px 0px #1741b7,
    inset 0px 2px 0px rgba(255, 255, 255, 0.13),
    inset -1px -1px 0px rgba(5, 17, 57, 0.1);
  border-radius: 8px;
  span {
    color: white;
  }
`;

const SearchBar = styled.div`
  flex: 0.9;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
`;
