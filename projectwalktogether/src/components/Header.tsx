import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../assets/shoes.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("login");
  };

  return (
    <Nav>
      <LeftSection>
        <Link to="/">
          <Logo src={logoImg} alt="Logo" />
        </Link>
      </LeftSection>
      <NavUl>
        <NavLi>
          <NavText to="/">Home</NavText>
        </NavLi>
        <NavLi>
          <NavText to="/map">Map</NavText>
        </NavLi>
        <NavLi>
          <NavText to="/chat">chat</NavText>
        </NavLi>
      </NavUl>
      <Profile>닉네임</Profile>

      <LoginButton onClick={handleLogin}>Login/탭</LoginButton>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9fb;
  padding: 1.875rem 2.1875rem 1.875rem 2.1875rem;
`;

const LeftSection = styled.div`
  justify-items: flex-start;
  display: flex;
  margin: 0px;
`;

const NavUl = styled.ul`
  display: flex;
  width: 50%;
`;

const NavLi = styled.li`
  list-style: none;
  margin-right: 3.25rem;
  text-decoration: none;
`;
const NavText = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.25rem;
`;
const LoginButton = styled.button`
  display: flex;
  border: none;
  padding-left: 1.5625rem;
  padding-right: 1.5625rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;

  width: 6.25rem;
  background: #ff5c00;

  color: white;
`;

const Profile = styled.div`
  display: flex;
  width: 3.5rem;
  height: 2.5rem;
  padding-top: 0.625rem;
  padding-left: 5.5625rem;
`;
const Logo = styled.img`
  height: 3.125rem;
  cursor: pointer;
`;
