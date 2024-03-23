// import './style.scss';
import './index.css';
import introImage from '../../asset/image 3.png';
import monkey from '../../asset/monkey.png';
import backMonkey from '../../asset/image 1.png';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
// import mentImage from '../../asset/image 2.png';
import rightLogo from '../../asset/logo2.png';
import chrome from '../../asset/chromelogo.png';
import blank from '../../asset/blank.png';

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
            <Button
              className="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <img src={chrome} alt="크롬 로고" />
              Chrome에 추가
            </Button>
          </div>
        </div>

        <div className="container">
          <div className="bottom-left">
            <img
              className="right-logo"
              src={rightLogo}
              alt="몽키 오른쪽 로고"
            />
            <img className="backMonkey" src={backMonkey} alt="몽키뒷글자" />
            <img className="monkey" src={monkey} alt="몽키"></img>
          </div>
          <img src={blank} className="blank" alt="blank" />
        </div>
      </div>
    </>
  );
}

export default MainScreen;
