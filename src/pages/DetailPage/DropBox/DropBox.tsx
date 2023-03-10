import React, { useEffect, useState } from 'react';
import * as S from './DropBox.style';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteDoc, doc, documentId, updateDoc } from 'firebase/firestore';
import { dbService } from './../../../common/firebase';
import { useNavigate } from 'react-router-dom';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../../messagewindow/MessageWindow';
import { useSetRecoilState } from 'recoil';
import { MoreBtn } from '../DetailPage.style';

interface DropProps {
  id: any;
  getPostings: any;
  isDropped: React.Dispatch<React.SetStateAction<boolean>>;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBox: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropBox = ({ setShowBox, id, getPostings, setComplete }: DropProps) => {
  const navigate = useNavigate();
  console.log(id);

  // MessageWindow 세팅
  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  // 산책완료 변경
  const [posting, setPosting] = useState('posting');

  //삭제 버튼
  const DeletePostHandler = async (id: any) => {
    MessageWindow.showWindow(
      new MessageWindowProperties(
        true,
        '게시글을 삭제하실 건가요?',
        '삭제한 게시글을 되돌릴 수 없어요',
        [
          {
            text: '게시글 삭제하기',
            callback: async () =>
              await deleteDoc(doc(dbService, 'Post', id))
                .then(() => {
                  navigate(`/`);
                })
                //  then과 catch 세트이다.
                .catch((error) => {
                  console.log(error);
                  // });
                }),
          },
          {
            text: '취소하기',
            callback: () => {
              return;
            },
          },
        ],
        MessageWindowLogoType.Perplex
      ),
      setState
    );
  };

  // confirmAlert({
  //   title: '정말 게시물을 삭제하시겠습니까?',
  //   message: '삭제한 게시물은 되돌릴 수 없습니다.',
  //   buttons: [
  //     {
  //       label: '네',
  //       onClick: async () => {
  //         await deleteDoc(doc(dbService, 'Post', id))
  //           .then(() => {
  //             navigate(`/category/${getPostings.Category_Posting}`);
  //           })
  //           // then과 catch 세트이다.
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       },
  //     },
  //     {
  //       label: '아니오',
  //       onClick: () => 'return false',
  //     },
  //   ],
  // });
  // return;
  const CompletePostHandler = async (id: any) => {
    MessageWindow.showWindow(
      new MessageWindowProperties(
        true,
        '산책을 완료하셨나요?',
        '',
        [
          {
            text: '산책 완료하기',
            callback: async () =>
              await updateDoc(doc(dbService, 'Post', id), {
                ProceedState_Posting: 'postingDone',
              })
                .then(() => {
                  setComplete(true);
                })
                //  then과 catch 세트이다.
                .catch((error) => {
                  console.log(error);
                  // });
                }),
          },
          {
            text: '취소하기',
            callback: () => {
              return;
            },
          },
        ],
        MessageWindowLogoType.Congratulation
      ),
      setState
    );
    // confirmAlert({
    //   title: '산책을 완료하셨나요?',
    //   buttons: [
    //     {
    //       label: '네',
    //       onClick: async () => {
    //         await updateDoc(doc(dbService, 'Post', id), {
    //           ProceedState_Posting: 'postingDone',
    //         })
    //           .then(() => {
    //             // <MoreBtn style={{ display: 'none' }} />;
    //             setComplete(true);
    //             // setShowBox(false);
    //           })
    //           // then과 catch 세트이다.
    //           .catch((error) => {
    //             console.log(error);
    //           });
    //       },
    //     },
    //     {
    //       label: '아니오',
    //       onClick: () => 'return false',
    //     },
    //   ],
    // });
    // return;
  };

  // 이건 안된다.
  // useEffect(() => {
  //   DeletePostHandler(id);
  // }, []);

  // () => 이거 눌렀을때 실행해라 () => this 콜백함수이다.
  // 콜백함수 공부하기
  // 해당된 id값을 삭제하고 then이 실행해라.

  // 에러는 온클릭일때 id 필요하다, 전에는 onClick={ DeletePostHandler} 에러 캡처가 난거다.
  //

  return (
    <>
      <S.DropBoxWrapper>
        {/*수정버튼 영역 */}
        <S.DropUpdateBtn
          onClick={() => navigate(`/edit/${id}`, { state: getPostings })}
        >
          <S.UpdateIcon
            src={
              require('../../../assets/DetailPageIcon/ModifyIcon.svg').default
            }
          />
          <S.UpdateTitle>게시글 수정하기</S.UpdateTitle>
        </S.DropUpdateBtn>
        {/*산책버튼 영역 */}
        <S.DropCompletBtn onClick={() => CompletePostHandler(id)}>
          <S.CompleteIcon
            src={
              require('../../../assets/DetailPageIcon/completeIcon.svg').default
            }
          />
          <S.CompleteTitle>산책 완료하기</S.CompleteTitle>
        </S.DropCompletBtn>
        {/*삭제버튼 영역 */}
        <S.DropDeleteBtn onClick={() => DeletePostHandler(id)}>
          <S.DeleteIcon
            src={
              require('../../../assets/DetailPageIcon/trashIcon.svg').default
            }
          />
          <S.DeleteTitle>게시글 삭제하기</S.DeleteTitle>
        </S.DropDeleteBtn>
      </S.DropBoxWrapper>
    </>
  );
};

export default DropBox;
