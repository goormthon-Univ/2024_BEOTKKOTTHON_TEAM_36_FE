import { Dialog, Button, Flex } from '@radix-ui/themes';
import { useState } from 'react';

export function FirstModal({ isOpen, handleCheck, handleChangeModal }) {
  const [step, setStep] = useState(1);

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Dialog.Close>
              <Button>X</Button>
            </Dialog.Close>
            <Dialog.Title>이미지 넣기 가능..?</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              새로운 시작의 문턱에서,
              <br />
              매일,메일이 여러분의 든든한 지원군이 되어드립니다. <br />
              완벽한 메일 작성에 대한 걱정, 이제 그만!
            </Dialog.Description>
            <Dialog.Description size="2" mb="4">
              매일이와 쉽고 빠른 메일 작성
              <br />
              함께해봐요
            </Dialog.Description>

            <Flex gap="3" mt="4" justify="end">
              <Button onClick={() => setStep(2)}>AI 자동생성하기</Button>
            </Flex>
          </>
        );
      case 2:
        return (
          <div>
            <p>메일을 보내는 분은 누구인가요?</p>
            <input />
            <p>메일을 받으실 분은 누구인가요?</p>
            <input />
            <p>어떤 상황에 사용하시는 건가요?</p>
            <input />
            <div className="info">
              <p>
                입력된 내용을 바탕으로
                <br />
                AI 메일 작성 도와드릴게요!
              </p>
            </div>
            <Button onClick={handleCheck}>확인하러가기</Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleChangeModal}>
      <Dialog.Content style={{ maxWidth: 450 }}>
        {renderContent()}
      </Dialog.Content>
      {/* 
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>이미지 넣기 가능..?</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          새로운 시작의 문턱에서,
          <br />
          매일,메일이 여러분의 든든한 지원군이 되어드립니다. <br />
          완벽한 메일 작성에 대한 걱정, 이제 그만!
        </Dialog.Description>
        <Dialog.Description size="2" mb="4">
          매일이와 쉽고 빠른 메일 작성
          <br />
          함께해봐요
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button>AI 자동생성하기</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content> */}
    </Dialog.Root>
  );
}
