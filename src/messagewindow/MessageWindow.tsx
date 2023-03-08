import { useEffect, useRef } from 'react';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';

import checkmark from '../assets/messageWindow/Checkmark.svg';
import confetti from '../assets/messageWindow/Confetti.svg';
import cryingFace from '../assets/messageWindow/CryingFace.svg';
import flower from '../assets/messageWindow/Flower.svg';
import id from '../assets/messageWindow/ID.svg';
import perplex from '../assets/messageWindow/Perplex.svg';
import rocket from '../assets/messageWindow/Rocket.svg';
import writingHand from '../assets/messageWindow/WritingHand.svg';
import yellowPencil from '../assets/messageWindow/YellowPencil.svg';
import CloseButton from '../assets/messageWindow/CancelBtn.svg';

//
// 사용법
//
// 1. 컴포넌트에 setMessageWindowPropertiesState 설정
//
// const setState = useSetRecoilState<MessageWindowProperties>(
//     messageWindowPropertiesAtom
// )
//
//
//
// 2. 원하시는 곳에서 MessageWindow.alert() 호춯
//
// const props = new MessageWindowProperties(
//     true, // true로 하셔야 창 띄워집니다.
//     "제목", // 보여줄 제목
//     "메시지", // 보여줄 메시지
//     [
//         {
//             text: "버튼1에 쓸 텍스트",
//             callback: () => {
//                                 // 여기에 할 거 하시면 됩니다.
//                             }
//         },
//         {
//             text: "버튼2에 쓸 텍스트",
//             callback: () => {
//                                 // 여기에 할 거 하시면 됩니다.
//                             }
//         }
//     ],MessageWindowLogoType.원하는 이모티콘 넣기
// )
//
// MessageWindow.showWindow(props, setState)
//

export default class MessageWindow {
  static showWindow(
    props: MessageWindowProperties = new MessageWindowProperties(false),
    recoilSetStateFunction: (arg0: MessageWindowProperties) => void = () => {}
  ) {
    recoilSetStateFunction(props);
  }
}

export enum MessageWindowLogoType {
  None,
  Checkmark,
  Confetti,
  CryingFace,
  Flower,
  ID,
  Perplex,
  Rocket,
  WritingHand,
  YellowPencil,
}

const ModalWrap = styled.div``;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
`;

const AlertWrap = styled.div`
  width: 343px;
  height: 400px;
  padding: 20px 64px;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 0px 10px #bec5d7;
  border-radius: 4px;
`;
const AlertCloseButton = styled.button`
  width: 20px;
  height: 20px;
  margin-left: auto;
  background-color: transparent;
`;

const LogoImg = styled.img`
  width: 172px;
  height: 172px;
`;
const AlertTitle = styled.div`
  letter-spacing: -2px;
  width: 275px;
  height: 36px;
  line-height: 150.8%;
  margin-top: 8px;
  font-family: 'SUITERegular';
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 8px;
`;

const AlertMessage = styled.div`
  letter-spacing: -2px;
  font-family: 'SUITERegular';
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150.8%;
  text-align: center;
  color: #7d8bae;
`;

const AlertButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 32px;
  border: 1px solid #bec5d7;
  border-radius: 32px;
  margin-bottom: 8px;
  background: #ffffff;
  color: #7d8bae;
  &:hover {
    background: #7d8bae;
    color: #eef1f7;
  }
`;

const AlertButtonContainer = styled.div`
  margin-top: 24px;
`;

export function MessageWindowComponent() {
  const [props, setProps] = useRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClickEvent = (e: any) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        if (props.isVisible) {
          setProps(new MessageWindowProperties());
        }
      }
    };

    if (props.isVisible) {
      window.addEventListener('click', onClickEvent);
    } else {
      window.removeEventListener('click', onClickEvent);
    }
  }, [props.isVisible]);

  const renderLogo = () => {
    switch (props.logoType) {
      case MessageWindowLogoType.None:
        return <></>;
      case MessageWindowLogoType.Checkmark:
        return <LogoImg src={checkmark} alt='Checkmark' />;

      case MessageWindowLogoType.Confetti:
        return <LogoImg src={confetti} alt='Confetti' />;

      case MessageWindowLogoType.CryingFace:
        return <LogoImg src={cryingFace} alt='Crying Face' />;

      case MessageWindowLogoType.Flower:
        return <LogoImg src={flower} alt='Flower' />;

      case MessageWindowLogoType.ID:
        return <LogoImg src={id} alt='ID' />;

      case MessageWindowLogoType.Perplex:
        return <LogoImg src={perplex} alt='Perplex' />;

      case MessageWindowLogoType.Rocket:
        return <LogoImg src={rocket} alt='Rocket' />;

      case MessageWindowLogoType.WritingHand:
        return <LogoImg src={writingHand} alt='Writing Hand' />;

      case MessageWindowLogoType.YellowPencil:
        return <LogoImg src={yellowPencil} alt='Yellow Pencil' />;

      default:
        return <></>;
    }
  };

  return (
    <>
      {props.isVisible && (
        <ModalWrap>
          <ModalBackground>
            <AlertWrap ref={ref}>
              <AlertCloseButton
                onClick={() => {
                  setProps(new MessageWindowProperties());
                }}
              >
                {/* <img src={CloseButton} alt='Close Button'></img> */}
              </AlertCloseButton>
              {renderLogo()}
              <AlertTitle>{props.title}</AlertTitle>
              <AlertMessage>{props.message}</AlertMessage>
              <AlertButtonContainer>
                {props.buttons.map((buttonData) => {
                  return (
                    <AlertButton
                      key={buttonData.text}
                      onClick={() => {
                        setProps(new MessageWindowProperties());
                        buttonData.callback();
                      }}
                    >
                      {buttonData.text}
                    </AlertButton>
                  );
                })}
              </AlertButtonContainer>
            </AlertWrap>
          </ModalBackground>
        </ModalWrap>
      )}
    </>
  );
}

export class MessageWindowProperties {
  constructor(
    isVisible: boolean = false,
    title: string = '',
    message: string = '',
    buttons: Array<{
      text: string;
      callback: () => void;
    }> = [],
    logoType: MessageWindowLogoType = MessageWindowLogoType.None
  ) {
    this.isVisible = isVisible;
    this.title = title;
    this.message = message;
    this.buttons = buttons;
    this.logoType = logoType;
  }

  isVisible: boolean;
  title: string;
  message: string;
  logoType: MessageWindowLogoType;

  buttons: Array<{
    text: string;
    callback: () => void;
  }>;
}

export const messageWindowPropertiesAtom = atom({
  key: 'messageWindow.properties',
  default: new MessageWindowProperties(),
});
