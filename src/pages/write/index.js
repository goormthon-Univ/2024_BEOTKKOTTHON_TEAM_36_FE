import { useEffect, useState } from 'react';
import './index.css';
import { FirstModal } from './Modal/FirstModal';
import { useNavigate } from 'react-router-dom';
import LeftEmail from './LeftEmail';
import Header from '../../components/Header/Header';
import RightEmail from './RightEmail';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  contentsState,
  formDataState,
  isInputedState,
} from '../../recoil/atoms';
// import logo from '../../asset'

function WriteScreen() {
  const [contents, setContents] = useRecoilState(contentsState);
  const [isInputed, setInputed] = useRecoilState(isInputedState);
  const Content = useRecoilValue(contentsState);
  const formData = useRecoilValue(formDataState);

  const retryCount = 3;
  let retry = 0;

  const postMailHelper = () => {
    const requestData = {
      user_id: 1,
      sender: formData.sendName,
      sender_info: formData.sendInput,
      receiver: formData.recipientName,
      receiver_info: formData.target,
      purpose: formData.situation,
    };

    const sendRequest = () => {
      axios
        .post('https://maeilmail.site/api/helper', requestData, {
          timeout: 20000,
        })
        .then((response) => {
          console.log(response);
          alert('메일이 성공적으로 전송되었습니다.');
        })
        .catch((error) => {
          console.error(error);
          if (retry < retryCount) {
            retry++;
            sendRequest();
          } else {
            alert('메일 전송에 실패했습니다. 다시 시도해주세요.');
            window.location.reload();
          }
        });
    };

    sendRequest();
  };

  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen && !isCheck) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div>
      <Header />
      <FirstModal
        isOpen={isOpen}
        handleChangeModal={(open) => {
          setIsOpen(open);
        }}
        handleCheck={() => {
          setIsCheck(true);
          setIsOpen(false);
        }}
        postMailHelper={postMailHelper}
      />
      <div>
        {/* <img src={logo} alt='회색 로고'/> */}
        <div className="Email-container">
          <LeftEmail />
        </div>
      </div>
    </div>
  );
}

export default WriteScreen;
