import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Map from './Kakaomap';

declare global {
    interface Window {
        kakao: any;
    }
}

function LoginModal({ open, onClose, setLoginModalopen }: any | JSX.Element) {
    const [findPwd, setFindPwd] = useState('');
    const email = findPwd;
    const ref = useRef<HTMLDivElement>(null);

    // 인풋값을 저장
    const findPasswordfnc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFindPwd(e.target.value);
        console.log(findPwd);
    };

    const handleSubmitClick = () => {
        var i = 0;
    };

    // 모달을 끄고있게 해준다.
    if (!open) return null;

    return (
        <Overlay>
            <ModalContainer className="modalContainer">
                {/* <div className="modalRight"> */}
                <CloseBtn onClick={onClose} className="closeBtn">
                    x
                </CloseBtn>
                <Map />
                {/* <StyledContainer id="map" ref={ref} /> */}

                <BtnContainer className="btnContainer">
                    <Btnprimary
                        onClick={handleSubmitClick}
                        type="submit"
                        className="btnprimary"
                    >
                        <Span className="bold">제 출</Span>
                    </Btnprimary>
                </BtnContainer>
                {/* </div> */}
            </ModalContainer>
        </Overlay>
    );
}

export default LoginModal;

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
`;

// 배경의 색(회색)
const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    transform: translate(0%, -100%);
    width: 100%;
    height: 100%;
    z-index: 2;
`;

//모달 박스 (흰색)
const ModalContainer = styled.div`
    /* max-width: 60%; */
    width: 60%;
    height: 80%;
    position: relative;
    top: 10%;
    left: 20%;

    background-color: white;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    @media screen and (max-width: 768px) {
        font-size: 5px;
        width: 70%;
        height: 80%;
        position: relative;
        left: 20%;
    }
`;

// X버튼
const CloseBtn = styled.p`
    position: absolute;
    top: -50px;
    right: 50px;
    cursor: pointer;
    background-color: white;
    @media screen and (max-width: 972px) {
        right: 7%;
    }
`;

const BtnContainer = styled.div`
    position: relative;
    top: 75%;
    left: 40%;
    width: 7rem;
    height: 5rem;
    padding: 1rem 1rem;
    @media screen and (max-width: 1244px) {
        left: 37%;
    }
    @media screen and (max-width: 1030px) {
        left: 37%;
    }
    @media screen and (max-width: 972px) {
        left: 32%;
    }
    @media screen and (max-width: 768px) {
        left: 32%;
    }
    @media screen and (max-width: 581px) {
        left: 27%;
    }
    @media screen and (max-width: 497px) {
        left: 23%;
    }
    @media screen and (max-width: 435px) {
        left: 20%;
        top: 70%;
    }
    @media screen and (max-width: 375px) {
        left: 12%;
    }
    @media screen and (max-width: 315px) {
        left: 8%;
    }
`;

const Btnprimary = styled.button`
    width: 6.25rem;
    height: 2rem;
    /* position: relative; */
    left: 15rem;
    margin: 0.5rem;
    padding: 1rem 0;
    border: none;
    color: #2192ff;
    background-color: aliceblue;
    border-radius: 2.1875rem;
    cursor: pointer;
`;

//버튼 글자
const Span = styled.span`
    position: relative;
    bottom: 0.5rem;
`;
