import React from 'react';
import * as S from './Footer.style';
import { Link } from 'react-router-dom';
import CommonStyles from '../../styles/CommonStyles';

function Footer() {
  return (
    <S.NavContainer>
      <S.FooterContentsOuter>
        <S.LogoNIntro>
          <S.LogoBox>
            <S.Logoimg src={require('../../assets/logo.png')} alt='logo' />
            <S.IntroBox>
              <S.IntroText>함께 걸으실래요?</S.IntroText>
              <S.IntroText>산책을 함께 할 친구 </S.IntroText>
              <S.IntroText>매칭을 위한 플랫폼</S.IntroText>
              {/* <p>내일배움캠프 리액트 트랙 </p> */}
              <S.IntroText> 올래입니다.</S.IntroText>
            </S.IntroBox>
          </S.LogoBox>
        </S.LogoNIntro>
        <S.Contact>
          <S.ContactBox>
            <S.ContactText>CONTACT</S.ContactText>
            <S.ContactBtnBox>
              <S.GitImg src={require('../../assets/Header/github.png')} />
              <S.Contactus
                href='https://github.com/Jinyang-Park'
                target='_blank'
              >
                Jinyang
              </S.Contactus>
            </S.ContactBtnBox>
            <S.ContactBtnBox>
              <S.GitImg src={require('../../assets/Header/github.png')} />

              <S.Contactus href='https://github.com/rhsok' target='_blank'>
                Hyeongsun
              </S.Contactus>
            </S.ContactBtnBox>
            <S.ContactBtnBox>
              <S.GitImg src={require('../../assets/Header/github.png')} />
              <S.Contactus href='https://github.com/GhostPines' target='_blank'>
                Minsung
              </S.Contactus>
            </S.ContactBtnBox>
            <S.ContactBtnBox>
              <S.GitImg src={require('../../assets/Header/github.png')} />
              <S.Contactus href='https://github.com/Leekee01' target='_blank'>
                Huigyeong
              </S.Contactus>
            </S.ContactBtnBox>
            <S.ContactBtnBox>
              <S.GitImg src={require('../../assets/Header/github.png')} />
              <S.Contactus href='https://github.com/themrsung' target='_blank'>
                Alejandro
              </S.Contactus>
            </S.ContactBtnBox>
            <S.ContactBtnBox>
              <S.PlaneImg src={require('../../assets/plane.svg').default} />
              <S.Contactus href='mailto:hjson1024@gmail.com' target='_blank'>
                Hyeju
              </S.Contactus>
            </S.ContactBtnBox>
          </S.ContactBox>
        </S.Contact>
        <S.Notion>
          <S.NotionBox>
            <S.NotionText>NOTION</S.NotionText>
            <S.NotionAdress
              href='https://www.notion.so/Project-Walk-Together-Final-354dd91df9b2405f90bd8519fc03f0a3?pvs=4'
              target='_blank'
            >
              Team Ollae
            </S.NotionAdress>
          </S.NotionBox>
          <S.ReservedText>
            Copyrightⓒ2023 ollae All rights reserved.
          </S.ReservedText>
        </S.Notion>
        <S.Section>
          <S.SectionBox>
            <S.SectionText>SECTION</S.SectionText>
            <S.SectionNav to='/collection/1'>뜨거운 신발</S.SectionNav>
            <S.SectionNav to='/collection/2'>신발 신는중</S.SectionNav>
            <S.SectionNav to='/collection/3'>매칭 된 신발</S.SectionNav>
          </S.SectionBox>
        </S.Section>
      </S.FooterContentsOuter>
    </S.NavContainer>
  );
}

export default Footer;
