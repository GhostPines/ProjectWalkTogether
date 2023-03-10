import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ComeLogo from '../../src/assets/logobyollae.svg';

export const NavContainer = styled.div`
  height: 52px;
  background-color: white;
  width: 100%;
  position: relative;
  border-bottom: 0.5px solid rgba(190, 197, 215, 1);
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;
export const OllaeLogo = styled.img`
  width: 35px;
  height: 35px;
  padding-right: 6px;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    width: 35px;
    height: 35px;
    padding-left: 20px;
  }
`;
export const OllaeBox = styled.div`
  display: flex;
`;

export const OllaeText = styled.p`
  margin: auto;
  text-align: center;
  margin-top: 3px;
  font-size: 20px;
  font-family: 'SUITEBold';
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 420px) {
    font-size: 15px;
    font-family: 'SUITEBold';
    font-weight: 600;
  }
`;

export const Nav = styled.div`
  display: flex;
  margin: auto;
  width: 868px;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 420px) {
    position: absolute;
    width: 434px;
  }
`;

export const SideOllae = styled.div`
  margin-right: 400px;
  @media screen and (max-width: 420px) {
    margin-right: 0px;

    left: 30%;
    position: absolute;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  @media screen and (max-width: 420px) {
  }
`;

export const NavLi = styled.li`
  list-style: none;
  margin-right: 40px;
  margin-top: 8px;
  text-decoration: none;
  @media screen and (max-width: 420px) {
    margin-right: 20px;
  }
`;
export const NavText = styled(Link)`
  text-decoration: none;
  font-family: 'SUITERegular';
  letter-spacing: -2px;
  padding-top: 0px;
  font-size: 12px;
`;
export const LoginButton = styled.div`
  border: none;
  padding: 4px 12px 4px 12px;
  //상우하좌

  margin-top: 10px;

  border-radius: 5px;
  /* width: max-content; */
  height: 30px;
  /* background: blue; */
  font-size: 12px;
  color: black;
  background-color: #eef1f7;
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  justify-content: center;
`;

export const LoginLayout = styled.div`
  display: flex; ;
`;
export const LoginText = styled.p`
  margin-right: 10px;
`;

export const NavEtc = styled.div`
  display: flex;
  margin: 0px;
  @media screen and (max-width: 420px) {
  }
`;
export const Profile = styled.div`
  padding-top: 10px;
  font-size: 10px;
`;
export const Logo = styled.img`
  cursor: pointer;
`;
export const DropdownButton = styled.div`
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const MyPageContainer = styled(DropdownContainer)``;

export const Ul = styled.ul`
  & > li {
    margin-bottom: 15px;
  }
  & > li:first-of-type {
    margin-top: 15px;
  }
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Li = styled.li``;

export const LoginDropNav = styled.nav<{ isPropped: boolean }>`
  background: #eef1f7;
  box-shadow: 0 0 10px #bec5d7;
  position: absolute;
  top: 40px;
  width: 78px;
  text-align: center;
  border-radius: 3px;
  z-index: 9;
  ${({ isPropped }) =>
    isPropped &&
    css`
      opacity: 1;
    `};
`;

export const DropNav = styled.nav<{ isDropped: boolean }>`
  background: #b8c0d1;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;
  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;
export const AlarmContainer = styled(DropdownContainer)`
  position: relative;
  right: 10px;
  top: 8px;
`;

export const AlarmButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  background: blue;
`;

export const NotificationsBox = styled.div`
  background: white;
  position: absolute;
  right: -100px;
  width: 210px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transform: translate(-65%, -20px);
  /* opacity: 0; */
`;

export const Reddot = styled.div`
  background-color: red;
  border-radius: 30px;
  width: 4px;
  height: 4px;
  position: relative;
  bottom: 22px;
  left: 20px;
  z-index: 2;
`;

export const Img = styled.img`
  width: 16px;
  height: 20px;
  position: relative;
  left: 5px;
  z-index: 1;
`;
export const LoginImg = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 5px;
  z-index: 1;
`;

export const Logout = styled.div``;

export const NotificationTitleBox = styled.div`
  border-bottom: 1px solid #eef1f7;
  /* background-color: blue; */
  width: 210px;
  height: 31px;
`;

export const NotificationTitleXbtn = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  bottom: 17px;
  left: 192px;
`;
