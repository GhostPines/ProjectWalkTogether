import styled from 'styled-components';
import { authService } from '../../common/firebase';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { kakaoState } from '../../Rocoil/Atom';

export default function KakaoLogoutButton() {
  const navigate = useNavigate();
  const [kakaoCode, setKakaoCode] = useRecoilState(kakaoState);

  const Logout = async () => {
    if (kakaoCode) {
      setKakaoCode('');
      sessionStorage.clear();
      localStorage.clear();
      alert('로그아웃성공!');
      navigate('/');
    } else {
      authService.signOut();
      sessionStorage.clear();
      localStorage.clear();
    }

    // 새로고침 하지않으면 네이버로그인 버튼이 사라짐. 렌더링문제인듯함
  };

  return (
    <>
      <KakaoLogout onClick={Logout}>로그아웃</KakaoLogout>
    </>
  );
}

const KakaoLogout = styled.div`
  cursor: pointer;
  font-size: 10px;
`;
