import { useState } from 'react';
import './RightEmail.css';
import LastModal from './Modal/LastModal';
import arrow from '../../asset/sendArrow.png';
import { useRecoilValue } from 'recoil';
import { formDataState } from '../../recoil/atoms';
import copy from '../../asset/copyIcon.png';
import loadingBackground from '../../asset/LoadingBackground.png';
import loadingIcon from '../../asset/aiLogo.png';

function RightEmail({ apiResponse, kind }) {
  const kindContent = kind;
  const formData = useRecoilValue(formDataState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const apiContent1 =
    apiResponse && apiResponse.data && apiResponse.data.version1;
  const apiContent2 =
    apiResponse && apiResponse.data && apiResponse.data.version2;
  const apiContent3 =
    apiResponse && apiResponse.data && apiResponse.data.version3;
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('복사 성공');
      },
      () => {
        alert('복사 실패');
      },
    );
  };

  return (
    <>
      <div className="right-container" style={{ marginLeft: '40px' }}>
        <div className="first-container">
          <input
            className="receiverEmail"
            placeholder="받는 사람 주소를 입력해주세요!"
          />
          <div className="reference">참조</div>
        </div>

        <div className="emailContents">
          <div className="infoKind">
            {kindContent +
              ' 영역에서 ' +
              formData.recipientName +
              ' ' +
              formData.target +
              ' 대상으로 새로 생성한 템플릿이에요!'}
          </div>
          <div className="one">
            {apiContent1}
            <button
              className="copy"
              button
              onClick={() => copyToClipboard(apiContent1)}
            >
              <img src={copy} alt="복사하기" />
            </button>
          </div>
          <div className="two">
            {apiContent2}
            <button
              className="copy"
              button
              onClick={() => copyToClipboard(apiContent2)}
            >
              <img src={copy} alt="복사하기" />
            </button>
          </div>
          <div className="three">
            {apiContent3}
            <button
              className="copy"
              button
              onClick={() => copyToClipboard(apiContent3)}
            >
              <img src={copy} alt="복사하기" />
            </button>
          </div>
        </div>

        <div className="last-container">
          <input
            className="senderEmail"
            placeholder="보내는 사람 주소를 입력해주세요!"
          />
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            style={{
              width: '150px',
              height: '35px',
              borderRadius: '200px',
              backgroundColor: '#0E57CB',
              border: 'none',
              marginTop: '3px',
            }}
          >
            <img src={arrow} alt="전송 화살표" style={{ marginTop: '5px' }} />
          </button>
        </div>
        <LastModal isOpen={isModalOpen} onClose={handleCloseModal}></LastModal>
      </div>

      <div className="Loading">
        <div className="first-container">
          <input
            className="receiverEmail"
            placeholder="받는 사람 주소를 입력해주세요!"
          />
          <div className="reference">참조</div>
        </div>
        <div className="SecondemailContents">
          <div className="Infos">
            <p className="titleInfo">
              제목은 목적과 내용이 드러나도록 써야해요!
            </p>
            <p className="greetInfo">인사와 소속을 밝히며 시작해요!</p>
            <p className="mainInfo">메일의 목적을 분명히 해야해요!</p>
            <p className="concludeInfo">
              감사 인사를 넣어 메일의 끝맺음을 알려요!
            </p>
          </div>
          <img className="loadingIcon" src={loadingIcon} alt="로딩중" />
          <div className="infoLoading">
            {kindContent +
              ' 영역에서 ' +
              formData.recipientName +
              ' ' +
              formData.target +
              ' 대상으로 템플릿을 생성하고 있어요!'}
          </div>
        </div>
        <div className="last-container">
          <input
            className="senderEmail"
            placeholder="보내는 사람 주소를 입력해주세요!"
            style={{ width: '340px' }}
          />
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            style={{
              width: '150px',
              height: '35px',
              borderRadius: '200px',
              backgroundColor: '#0E57CB',
              border: 'none',
              marginTop: '3px',
            }}
          >
            <img src={arrow} alt="전송 화살표" style={{ marginTop: '5px' }} />
          </button>
        </div>
      </div>
    </>
  );
}

export default RightEmail;
