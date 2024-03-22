import './LeftEmail.css';
import '@radix-ui/themes/styles.css';
import { Theme, Flex } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import mailHeader from '../../asset/emailHeader.png';
import grayLogo from '../../asset/grayLogo.png';
import emailMonkey from '../../asset/emailMonkey.png';
import InputWithButton from './InputWithButton';

export default function LeftEmail() {
  const [contents, setContents] = useState({
    title: { text: '', length: 0 },
    greet: { text: '', length: 0 },
    main: { text: '', length: 0 },
    conclude: { text: '', length: 0 },

    // title: '',
    // greet: '',
    // main: '',
    // conclude: '',
  });

  const handleButtonClick = () => {
    // console.log('button');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContents({
      ...contents,
      [name]: { text: value, length: value.length },
    });
  };
  // const isButtonEnabled = !!value.trim();
  // console.log(
  //   `${name} 필드의 버튼 활성화 상태: ${
  //     isButtonEnabled ? '활성화' : '비활성화'
  //   }`,
  // );

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  return (
    <div className="left-container">
      {/* <img src={emailMonkey} alt="몽키 얼굴" style={{ width: '369px' }} /> */}
      <img src={grayLogo} alt="회색 메일 로고" style={{ width: '779px' }} />
      <img
        src={mailHeader}
        alt="메일 갈색 헤더"
        style={{ width: '779px', height: '35px', marginBottom: '10px' }}
      />
      <Theme>
        <Flex direction="column" gap="2" style={{ maxWidth: 779 }}>
          <InputWithButton
            name="title"
            className="title"
            placeholder="제목"
            value={contents.title.text}
            onChange={handleChange}
            onButtonClick={handleButtonClick}
          />
          <InputWithButton
            name="greet"
            className="greet"
            placeholder="인사말"
            value={contents.greet.text}
            onChange={handleChange}
            onButtonClick={handleButtonClick}
          />
          <InputWithButton
            name="main"
            className="main"
            placeholder="본문"
            value={contents.main.text}
            onChange={handleChange}
            onButtonClick={handleButtonClick}
          />
          <InputWithButton
            name="conclude"
            className="conclude"
            placeholder="맺음말"
            value={contents.conclude.text}
            onChange={handleChange}
            onButtonClick={handleButtonClick}
          />
        </Flex>
      </Theme>
    </div>
  );
}
