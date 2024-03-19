// import './style.scss';
import './index.css';
import introImage from '../../asset/image 3.png';
import monkey from '../../asset/monkey.png';
import backMonkey from '../../asset/image 1.png';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import mentImage from '../../asset/image 2.png';
import rightLogo from '../../asset/logo2.png';

function MainScreen() {
  const navigate = useNavigate();
  const ToWritePage = () => {
    navigate('/write', { replace: true });
  };
  return (
    <>
      <div
        style={{
          height: '100%',
          position: 'relative',
          backgroundColor: '#FFD875',
        }}
      >
        {/* <div className="mentImages">
        <img src={mentImage} alt="첫번째메일글씨" />
      </div> */}
        <div className="intro">
          <p className="intro1">누구보다 쉽고 빠르게 메일을 보내는 방법</p>
          <img className="introImage" src={introImage} alt="소개이미지" />
          <p className="intro2">
            메일이 처음이라 고민이신가요?
            <br />
            인생 1회차 사회초년생을 위한 메일 작성 도우미
            <br />
            이제 메일? 매일! 하세요
          </p>
          <div className="buttons">
            <Button onClick={ToWritePage}>메일 쓰러가기</Button>
            <Button>Chrome에 추가</Button>
          </div>
        </div>
        <img className="right-logo" src={rightLogo} alt="몽키 오른쪽 로고" />
        <img className="backMonkey" src={backMonkey} alt="몽키뒷글자" />
        <img className="monkey" src={monkey} alt="몽키"></img>
      </div>
    </>
  );
}

export default MainScreen;
