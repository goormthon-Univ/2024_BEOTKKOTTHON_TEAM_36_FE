import { useEffect, useState } from 'react';
import './index.css';
import { FirstModal } from './Modal/FirstModal';
import { useNavigate } from 'react-router-dom';
import LeftEmail from './LeftEmail';
import Header from '../../components/Header/Header';
import RightEmail from './RightEmail';
// import logo from '../../asset'

function WriteScreen() {
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
      />
      <div>
        {/* <img src={logo} alt='회색 로고'/> */}
        <div className="Email-container">
          <LeftEmail />
          <RightEmail />
        </div>
      </div>
    </div>
  );
}

export default WriteScreen;
