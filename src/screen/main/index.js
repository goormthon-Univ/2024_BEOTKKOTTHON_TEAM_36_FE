// import './style.scss';
import Screen from '../Screen';

function MainScreen() {
  return (
    <Screen headerColor="white">
      {/* <img className="disk" alt="disk" src="disk.png" /> */}

      <div className="intro">
        <p className="intro1">AI가 추천하는 메일서비스, 매일,메일</p>
        <p className="intro2">매일 메일 멋진 메일을 작성하고 싶다!</p>
        <p className="intro3">
          처음 시작하는 그 모든 순간들, 매일,메일이 당신의 메일을 특별하게
          만들어줄 거에요. 감성적인 메일로 당신의 마음을 전하세요.
        </p>
        <p className="intro3">
          당신의 첫 인상을 전하는 메일, 매일,메일이 도와드립니다. 사회 초년생의
          설레는 마음을 담아, 따뜻한 말 한마디를 전해보세요.
        </p>
      </div>
      <div
        style={{ backgroundColor: 'lightgray', width: '100%', height: '400px' }}
      ></div>
      <div
        style={{ backgroundColor: 'skyblue', width: '100%', height: '400px' }}
      ></div>
    </Screen>
  );
}

export default MainScreen;
