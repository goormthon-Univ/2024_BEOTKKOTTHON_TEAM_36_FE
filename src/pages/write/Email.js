import './Email.css';
import '@radix-ui/themes/styles.css';
import { Theme, Button, Flex, TextArea, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import mailHeader from '../../asset/emailHeader.png';
import grayLogo from '../../asset/grayLogo.png';
import emailMonkey from '../../asset/emailMonkey.png';

export default function Email() {
  const [contents, setContents] = useState({
    tittle: '',
    greet: '',
    main: '',
    conclude: '',
  });

  return (
    <div className="container">
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
            <TextArea className="title" size="1" placeholder="제목" />
            <TextArea className="greet" size="2" placeholder="인사말" />
            <TextArea className="main" size="3" placeholder="본문" />
            <TextArea className="conclude" size="2" placeholder="맺음말" />
          </Flex>
        </Theme>
      </div>

      <div className="right-container">
        <div>
          <input placeholder="받는 사람 주소를 입력해주세요!" />
          <div style={{ border: '1px solid green', width: '40px' }}>참조</div>
        </div>
      </div>
    </div>
  );
}
