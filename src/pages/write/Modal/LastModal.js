// Modal.js
import React from 'react';
import './LastModal.css'; // 모달에 대한 스타일 지정
import header from '../../../asset/ModalHeader.png';
import logo from '../../../asset/image 3.png';
import BlueButton from './BlueButton';
import { Flex } from '@radix-ui/themes';
import modalMonkey from '../../../asset/modalMonkey.png';
import { useRecoilValue } from 'recoil';
import {
  contentsState,
  formDataState,
  isInputedState,
} from '../../../recoil/atoms';

function LastModal({ isOpen, onClose }) {
  const contents = useRecoilValue(contentsState);
  const inputed = useRecoilValue(isInputedState);
  const formData = useRecoilValue(formDataState);
  if (!isOpen) return null;

  // 입력되지 않은 항목의 이름을 가져오고, 'title'이 포함되어 있으면 '제목'으로 변환합니다.
  const notInputedNamesArray = Object.keys(inputed).filter(
    (key) => !inputed[key],
  );
  const notInputedNames = notInputedNamesArray
    .map((name) => {
      if (name === 'title') return '제목'; // 'title'을 '제목'으로 변환
      if (name === 'greet') return '인사말';
      if (name === 'main') return '본문';
      if (name === 'conclude') return '맺음말';

      return name; // 변환할 필요가 없는 경우 원래 이름을 반환
    })
    .join(', ');

  // contentsState의 각 항목의 길이 합계 계산
  const totalLength = Object.values(contents).reduce(
    (acc, { length }) => acc + length,
    0,
  );

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
          {formData.sendName}님께서는 <br />
          {totalLength}자의 텍스트를 완성했고
          <br />
          <br />
          <br />{' '}
          {notInputedNames.length > 0
            ? `${notInputedNames} 항목을 작성하지 않으셨어요`
            : '모든 항목을 완벽하게 작성하셨어요!'}
        </div>
        <div style={{ position: 'relative' }}>
          <Flex direction="column" gap="0" style={{ marginRight: '15px' }}>
            <BlueButton className="reverse" onClick={onClose}>
              수정하기
            </BlueButton>
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
