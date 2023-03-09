import styled from 'styled-components';

const Loader = () => {
  return (
    <Loading>
      <Img src={require('../../assets/Loader/loading.gif')} />
    </Loading>
  );
};

export default Loader;

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0; */
  /* animation: react-confirm-alert 0.5s 0.2s forwards; */
`;
const Img = styled.img`
  width: 500px;
  height: 500px;
`;
