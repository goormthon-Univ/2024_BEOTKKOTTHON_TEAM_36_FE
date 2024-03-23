import './LeftEmail.css';
import '@radix-ui/themes/styles.css';
import { Theme, Flex } from '@radix-ui/themes';
import { useEffect } from 'react';
import mailHeader from '../../asset/emailHeader.png';
import grayLogo from '../../asset/grayLogo.png';
import RightEmail from './RightEmail';
import axios from 'axios';
import aiLogo from '../../asset/aiLogo.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  contentsState,
  formDataState,
  isInputedState,
} from '../../recoil/atoms';

export default function LeftEmail() {
  const [contents, setContents] = useRecoilState(contentsState);
  const [isInputed, setInputed] = useRecoilState(isInputedState);
  const Content = useRecoilValue(contentsState);
  const formData = useRecoilValue(formDataState);

  const handleButtonClick = () => {
    // console.log('button');
  };
  // if (버튼이 클릭되면) {
  //   useEffect(() => {
  //     const postData = async () => {
  //       const PostData = {
  //         user_id: 1,
  //         sender: formData.sendName,
  //         sender_info: formData.sendInput,
  //         receiver: formData.recipientName,
  //         receiver_info: formData.target,
  //         purpose: formData.situation,
  //       };

  //       console.log('PostData:', PostData);
  //       try {
  //         const response = await axios.post(
  //           'https://maeilmail.site/api/helper',
  //           PostData,
  //           { timeout: 30000 },
  //         );
  //         console.log('성공:', response.data);
  //       } catch (error) {
  //         console.error('오류 발생:', error);
  //       }
  //     };
  //     postData();
  //   }, [Content.main.text]);

  // }else{

  // }

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
    console.log(contents);
  }, [isInputed, contents]);

  return (
    <div className="top-container">
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
            <div className="title-container" style={{ position: 'relative' }}>
              <input
                className="title"
                name="title"
                placeholder="제목"
                value={contents.title.text}
                onChange={handleChange}
              />
              <button className="titleButton" onClick={handleButtonClick}>
                <img src={aiLogo} alt="ai다시받기" />
              </button>
            </div>
            <div className="greet-container" style={{ position: 'relative' }}>
              <input
                className="greet"
                name="greet"
                placeholder="인사말"
                value={contents.greet.text}
                onChange={handleChange}
              />
              <button className="greetButton" onClick={handleButtonClick}>
                <img src={aiLogo} alt="ai다시받기" />
              </button>
            </div>
            <div className="main-container" style={{ position: 'relative' }}>
              <input
                className="main"
                name="main"
                placeholder="본문"
                value={contents.main.text}
                onChange={handleChange}
              />
              <button className="mainButton" onClick={handleButtonClick}>
                <img src={aiLogo} alt="ai다시받기" />
              </button>
            </div>
            <div
              className="conclude-container"
              style={{ position: 'relative' }}
            >
              <input
                className="conclude"
                name="conclude"
                placeholder="맺음말"
                value={contents.conclude.text}
                onChange={handleChange}
              />
              <button className="concludeButton" onClick={handleButtonClick}>
                <img src={aiLogo} alt="ai다시받기" />
              </button>
            </div>
          </Flex>
        </Theme>
      </div>
      <div className="right-container">
        <RightEmail />
      </div>
    </div>
  );
}
