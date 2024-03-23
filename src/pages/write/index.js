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
  const [serverResponse, setServerResponse] = useState('');

  const postMailHelper = () => {
    const requestData = {
      user_id: 1,
      sender: formData.sendName,
      sender_info: formData.sendInput,
      receiver: formData.recipientName,
      receiver_info: formData.target,
      purpose: formData.situation,
    };

    axios
      .post('https://maeilmail.site/api/helper', requestData)
      .then((response) => {
        console.log(response);
        setServerResponse(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error here
      });
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
          <LeftEmail serverResponse={serverResponse} />
        </div>
      </div>
    </div>
  );
}

export default WriteScreen;
