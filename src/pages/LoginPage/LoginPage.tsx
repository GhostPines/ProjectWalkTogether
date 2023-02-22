import React from 'react';
import * as S from './LoginPage.style';
import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  setPersistence,
  browserSessionPersistence,
  getAuth,
} from 'firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { dbService, authService } from '../../common/firebase';
import { emailRegex, pwdRegex } from '../../utils/UserInfoRegex';
import PassModal from '../LoginPage/PassModal';
import CommonStyles from './../../styles/CommonStyles';
import KakaoLoginButton from './KakaoLoginButton';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginModalopen, setLoginModalopen] = useState(false);
  const navigate = useNavigate();

  //onchange로 값을 저장.
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  //firebase
  const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPersistence(authService, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(authService, email, password)
          .then(() => {
            navigate('/', { replace: true });
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            //auth/invalid-tenant-id

            alert('로그인 실패');
            if (email.length === 0) {
              alert('이메일을 입력해 주세요');
            } else if (emailRegex.test(email) === false) {
              alert('이메일을 정확히 입력해 주세요');
            } else if (password.length === 0) {
              alert('비밀번호를 입력해 주세요');
            } else if (pwdRegex.test(password) === false) {
              alert('비밀번호를 정확히 입력해 주세요 ');
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  //비밀번호 찾기
  const findPwd = (e: any) => {
    e.preventDefault();
    setLoginModalopen(true);
  };

  //소셜로그인 페이스북

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authService, provider)
      .then((res) => {
        navigate('/');
        setDoc(doc(dbService, 'user', res.user.uid), {
          uid: res.user.uid,
          email: res.user.email,
          nickname: res.user.displayName,
          profileImg: res.user.photoURL,
        });
      })
      .catch(console.error);
  };

  //소셜로그인 구글
  const signInWithGoogle = () => {
    setPersistence(authService, browserSessionPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(authService, provider).then((res) => {
          setPersistence(auth, browserSessionPersistence);
          navigate('/');
          setDoc(doc(dbService, 'user', res.user.uid), {
            uid: res.user.uid,
            email: res.user.email,
            nickname: res.user.displayName,
            profileImg: res.user.photoURL,
            introduce: '',
          });
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <CommonStyles>
      <S.InputLayout>
        <form onSubmit={handleSubmitClick}>
          <S.InputBox>
            <S.leftBox />
            <S.InputBoxContent>
              <S.LoginLogo>
                <h1>같이 걸을래?</h1>
              </S.LoginLogo>
              <S.Inputholder>
                <S.Input
                  type='email'
                  name='아이디'
                  placeholder='이메일을 입력해주세요'
                  onChange={onChangeEmail}
                ></S.Input>
              </S.Inputholder>
              <S.Inputholder>
                <S.Input
                  type='password'
                  name='비밀번호'
                  placeholder='비밀번호를 입력해주세요'
                  onChange={onChangePassword}
                ></S.Input>
              </S.Inputholder>

              <S.ButtonBox>
                <S.LoginBtn type='submit'>로그인</S.LoginBtn>
              </S.ButtonBox>
              <S.LineBox>
                <S.Line />
                <S.OrText>또는</S.OrText>
                <S.Line />
              </S.LineBox>

              <S.SocialBox>
                <S.Facebook
                  onClick={signInWithFacebook}
                  src='/assets/facebook.png'
                />
                <S.Google onClick={signInWithGoogle} src='assets/google.png' />
                <KakaoLoginButton />
              </S.SocialBox>
              <S.ThirdBox>
                <S.RegisterBtn
                  type='button'
                  onClick={() => navigate('/signup')}
                >
                  회원 가입
                </S.RegisterBtn>
                <S.FindBox>
                  <S.RegisterBtn onClick={findPwd}>비밀번호찾기</S.RegisterBtn>
                </S.FindBox>
              </S.ThirdBox>
            </S.InputBoxContent>
          </S.InputBox>
        </form>

        <PassModal
          open={loginModalopen}
          setLoginModalopen={setLoginModalopen}
          onClose={() => setLoginModalopen(false)}
        />
      </S.InputLayout>
    </CommonStyles>
  );
};

export default LoginPage;
