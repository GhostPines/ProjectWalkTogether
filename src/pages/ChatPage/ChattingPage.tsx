import { useState } from 'react';
import styled from 'styled-components';
import CommonStyles from './../../styles/CommonStyles';
import ChattingList from './ChattingList/ChattingList';
import ChattingBox from './ChattingBox/ChattingBox';

const ChattingPage = () => {
  const [tochattingBoxUid, SetTochattingBoxUid] = useState<string>('');
  const [tochattingBoxRoomIndex, SetTochattingBoxRoomIndex] =
    useState<string>('');
  const [tochattingBoxOpponentRoomIndex, SetTochattingBoxOpponenRoomIndex] =
    useState<string>('');
  //채팅 리스트하나를 클릭했을 때 불이 들어오게 함

  return (
    <CommonStyles>
      <div>
        <Boxcontainer>
          <ChattingList
            SetTochattingBoxUid={SetTochattingBoxUid}
            SetTochattingBoxRoomIndex={SetTochattingBoxRoomIndex}
            SetTochattingBoxOpponenRoomIndex={SetTochattingBoxOpponenRoomIndex}
            tochattingBoxRoomIndex={tochattingBoxRoomIndex}
            tochattingBoxUid={tochattingBoxUid}
            tochattingBoxOpponentRoomIndex={tochattingBoxOpponentRoomIndex}
          />
          <ChattingBox
            tochattingBoxUid={tochattingBoxUid}
            tochattingBoxRoomIndex={tochattingBoxRoomIndex}
            tochattingBoxOpponentRoomIndex={tochattingBoxOpponentRoomIndex}
          />
        </Boxcontainer>
      </div>
    </CommonStyles>
  );
};
export default ChattingPage;

const Boxcontainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;
