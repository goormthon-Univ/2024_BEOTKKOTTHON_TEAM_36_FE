import './LeftEmail.css';
import '@radix-ui/themes/styles.css';
import { Theme, Flex } from '@radix-ui/themes';
import { useEffect, useRef, useState } from 'react';
import mailHeader from '../../asset/emailHeader.png';
import grayLogo from '../../asset/grayLogo.png';
import RightEmail from './RightEmail';
import axios from 'axios';
import aiLogo from '../../asset/aiLogo.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';

import emailMonkey from '../../asset/emailMonkey.png';
import {
  contentsState,
  formDataState,
  isInputedState,
} from '../../recoil/atoms';

export default function LeftEmailTitle({ serverResponse }) {
  const formData = useRecoilValue(formDataState);
  const [apiResponse, setApiResponse] = useState(null);
  const [kind, setKind] = useState('');

  const formMethods = useForm({
    mode: 'onChange',
    values: {
      greet: serverResponse.data?.greeting,
      title: serverResponse.data?.subject,
      main: serverResponse.data?.body,
      conclude: serverResponse.data?.closing,
    },
  });
  const {
    register,
    formState: { errors },
  } = formMethods;

  //   serverResponse && serverResponse.data && serverResponse.data.closing;
  const handleButtonClickTitle = async () => {
    try {
      const postData = {
        user_id: 1,
        sender: formData.sendName,
        sender_info: formData.sendInput,
        receiver: formData.recipientName,
        receiver_info: formData.target,
        purpose: formData.situation,
      };
      const response = await axios.post(
        'https://maeilmail.site/api/helper/retry?content-part=title',
        postData,
        { timeout: 30000 },
      );
      setApiResponse(response.data);
      setKind('제목');
      console.log('성공:', response.data);
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  const handleButtonClickGreeting = async () => {
    try {
      const postData = {
        user_id: 1,
        sender: formData.sendName,
        sender_info: formData.sendInput,
        receiver: formData.recipientName,
        receiver_info: formData.target,
        purpose: formData.situation,
      };
      const response = await axios.post(
        'https://maeilmail.site/api/helper/retry?content-part=greeting',
        postData,
        { timeout: 30000 },
      );
      setApiResponse(response.data);
      setKind('인사말');
      console.log('성공:', response.data);
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };
  const handleButtonClickBody = async () => {
    try {
      const postData = {
        user_id: 1,
        sender: formData.sendName,
        sender_info: formData.sendInput,
        receiver: formData.recipientName,
        receiver_info: formData.target,
        purpose: formData.situation,
      };
      const response = await axios.post(
        'https://maeilmail.site/api/helper/retry?content-part=body',
        postData,
        { timeout: 30000 },
      );
      setApiResponse(response.data);
      setKind('본문');
      console.log('성공:', response.data);
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  const handleButtonClickClosing = async () => {
    const startLoding = () => {};
    try {
      const postData = {
        user_id: 1,
        sender: formData.sendName,
        sender_info: formData.sendInput,
        receiver: formData.recipientName,
        receiver_info: formData.target,
        purpose: formData.situation,
      };
      const response = await axios.post(
        'https://maeilmail.site/api/helper/retry?content-part=closing',
        postData,
        { timeout: 30000 },
      );
      setApiResponse(response.data);
      setKind('맺음말');
      console.log('성공:', response.data);
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  // const handleChange = (e) => {
  // const { name, value } = e.target;

  // setContents({
  //   ...contents,
  //   [name]: { text: value, length: value.length },
  // });
  // setInputed({
  //   ...isInputed,
  //   [name]: value.length > 0,
  // });
  // };

  // useEffect(() => {
  //   console.log(isInputed);
  //   console.log(contents);
  // }, [isInputed, contents]);

  return (
    <FormProvider {...formMethods}>
      <div className="top-container">
        <div className="left-container">
          <img
            src={emailMonkey}
            alt="회색 메일 로고"
            style={{ width: '779px' }}
          />
          <img
            src={mailHeader}
            alt="메일 갈색 헤더"
            style={{ width: '779px', height: '35px', marginBottom: '5px' }}
          />
          <Theme>
            <Flex direction="column" gap="1" style={{ maxWidth: 779 }}>
              <div className="title-container" style={{ position: 'relative' }}>
                <textarea
                  className="title"
                  placeholder="제목"
                  rows="3"
                  style={{ resize: 'none' }}
                  {...register('title', { required: true })}
                />
                <button
                  className="titleButton"
                  onClick={handleButtonClickTitle}
                  disabled={!!errors.title}
                >
                  <img src={aiLogo} alt="ai다시받기" />
                </button>
              </div>
              <div className="greet-container" style={{ position: 'relative' }}>
                <textarea
                  className="greet"
                  placeholder="인사말"
                  rows="3"
                  style={{ resize: 'none' }}
                  {...register('greet', { required: true })}
                />
                <button
                  className="greetButton"
                  onClick={handleButtonClickGreeting}
                  disabled={!!errors.greet}
                >
                  <img src={aiLogo} alt="ai다시받기" />
                </button>
              </div>
              <div className="main-container" style={{ position: 'relative' }}>
                <textarea
                  className="main"
                  placeholder="본문"
                  rows="3"
                  style={{ resize: 'none' }}
                  {...register('main', { required: true })}
                />
                <button
                  className="mainButton"
                  onClick={handleButtonClickBody}
                  disabled={!!errors.main}
                >
                  <img src={aiLogo} alt="ai다시받기" />
                </button>
              </div>
              <div
                className="conclude-container"
                style={{ position: 'relative' }}
              >
                <textarea
                  className="conclude"
                  placeholder="맺음말"
                  rows="3"
                  style={{ resize: 'none' }}
                  {...register('conclude', { required: true })}
                />
                <button
                  className="concludeButton"
                  onClick={handleButtonClickClosing}
                  disabled={!!errors.conclude}
                >
                  <img src={aiLogo} alt="ai다시받기" />
                </button>
              </div>
            </Flex>
          </Theme>
        </div>
        <div className="right-container">
          <RightEmail apiResponse={apiResponse} kind={kind} />
        </div>
      </div>
    </FormProvider>
  );
}
