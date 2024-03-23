import './LeftEmail.css';
import '@radix-ui/themes/styles.css';
import { Theme, Flex } from '@radix-ui/themes';
import { useEffect } from 'react';
import mailHeader from '../../asset/emailHeader.png';
import grayLogo from '../../asset/grayLogo.png';
import emailMonkey from '../../asset/emailMonkey.png';
import InputWithButton from './InputWithButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  contentsState,
  formDataState,
  isInputedState,
} from '../../recoil/atoms';
import axios from 'axios';

export default function LeftEmail() {
  const [contents, setContents] = useRecoilState(contentsState);
  const [isInputed, setInputed] = useRecoilState(isInputedState);
  const Content = useRecoilValue(contentsState);
  const formData = useRecoilValue(formDataState);

  const handleButtonClick = () => {
    // console.log('button');
  };


    useEffect(() => {
      const postData = async () => {
        const PostData = {
          user_id: 1,
          sender: formData.sendName,
          sender_info: formData.situation,
          receiver: formData.recipientName,
          receiver_info: formData.target,
          purpose: Content.main.text,
        };
  
        console.log('PostData:', PostData);
        try {
          const response = await axios.post(
            'https://maeilmail.site/api/helper',
            PostData,
            { timeout: 30000 },
          );
          console.log('성공:', response.data);
        } catch (error) {
          console.error('오류 발생:', error);
        }
      };
      postData();
    }, [Content.main.text]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContents({
      ...contents,
      [name]: { text: value, length: value.length },
    });
    setInputed({
      ...isInputed,
      [name]: value.length > 0,
    });
  };

  useEffect(() => {
    console.log(isInputed);
  }, [isInputed]);

  return (
    <div className="left-container">
      {/* <img src={emailMonkey} alt="몽키 얼굴" style={{ width: '369px' }} /> */}
      <img src={grayLogo} alt="회색 메일 로고" style={{ width: '779px' }} />
      <img
        src={mailHeader}
        alt="메일 갈색 헤더"
        style={{ width: '779px', height: '35px', marginBottom: '5px' }}
      />
      <Theme>
        <Flex direction="column" gap="1" style={{ maxWidth: 779 }}>
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
