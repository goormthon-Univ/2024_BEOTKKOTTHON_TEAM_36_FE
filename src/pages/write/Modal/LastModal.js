// Modal.js
import React from 'react';
import './LastModal.css'; // 모달에 대한 스타일 지정
import header from '../../../asset/ModalHeader.png';
import logo from '../../../asset/image 3.png';
import BlueButton from './BlueButton';
import { Flex } from '@radix-ui/themes';
import modalMonkey from '../../../asset/modalMonkey.png';

function LastModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={header}
          alt="헤더"
          style={{ width: '100%', height: '40px', margin: '0 auto' }}
        />
        <div>
          <img
            className="logo"
            src={logo}
            alt="로고이미지"
            style={{
              width: '155px',
              height: '39px',
              marginTop: '30px',
              marginLeft: '155px',
            }}
          />
        </div>
        <div className="contents">
          성공적인 메일 작성 축하드려요!
          <br />
          <br />
          세부 내용이 모두 입력되어 있는지 다시 한번 확인 해주세요! <br />
          <br />
          ???님께서는 <br />
          ???자의 텍스트를 완성했고
          <br />
          <br />
          <br /> 맺음말을 작성하지 않으셨어요
        </div>
        <div style={{ position: 'relative' }}>
          <Flex direction="column" gap="0" style={{ marginRight: '15px' }}>
            <BlueButton className="reverse">수정하기</BlueButton>
            <BlueButton>최종 전송하기</BlueButton>
          </Flex>
          <img
            src={modalMonkey}
            alt="버튼 뒤 몽키"
            style={{
              position: 'absolute',
              bottom: '0',
              left: '80px',
              opacity: 0.7,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LastModal;
