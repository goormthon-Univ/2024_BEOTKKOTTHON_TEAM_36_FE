import { Dialog } from '@radix-ui/themes';
import { useState } from 'react';
import logo from '../../../asset/image 3.png';
import './FirstModal.css';
import ModalInputs from './ModalInputs';
import header from '../../../asset/ModalHeader.png';
import modalMonkey from '../../../asset/modalMonkey.png';
import BlueButton from './BlueButton';

export function FirstModal({ isOpen, handleCheck, handleChangeModal }) {
  const [step, setStep] = useState(1);

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div style={{ position: 'relative' }}>
            {/* <Dialog.Close>
              <Button style={{ background: 'none', color: 'black ' }}>X</Button>
            </Dialog.Close> */}
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
                  marginLeft: '142px',
                }}
              />
            </div>
            <p className="firstment">
              새로운 시작의 문턱에서,
              <br />
              매일,메일이 여러분의 든든한 지원군이 되어드립니다. <br />
              완벽한 메일 작성에 대한 걱정, 이제 그만!
            </p>
            <p className="secondment">
              매일이와 쉽고 빠른 메일 작성
              <br />
              함께해봐요
            </p>
            <BlueButton className="next" onClick={() => setStep(2)}>
              AI 자동생성하기
            </BlueButton>

            <img
              src={modalMonkey}
              alt="버튼 뒤 몽키"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '80px',
                top: '230px',
                // opacity: 0.7,
                pointerEvents: 'none',
              }}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <img
              src={header}
              alt="헤더"
              style={{ width: '100%', height: '40px', margin: '0 auto' }}
            />
            <ModalInputs />
            <div style={{ position: 'relative' }}>
              <BlueButton onClick={handleCheck}>확인하러가기</BlueButton>
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
        );
      default:
        return null;
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleChangeModal}>
      <Dialog.Content style={{ maxWidth: 470, height: 608, padding: '0px' }}>
        {renderContent()}
      </Dialog.Content>
    </Dialog.Root>
  );
}
