import { useState } from 'react';
import './RightEmail.css';
import LastModal from './Modal/LastModal';
import arrow from '../../asset/sendArrow.png';
function RightEmail() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="right-container" style={{ marginLeft: '40px' }}>
      <div className="first-container">
        <input
          className="receiverEmail"
          placeholder="받는 사람 주소를 입력해주세요!"
        />
        <div className="reference">참조</div>
      </div>
      <div className="emailContents"></div>
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
      <LastModal isOpen={isModalOpen} onClose={handleCloseModal}></LastModal>
    </div>
  );
}

export default RightEmail;
