import { useEffect, useState } from 'react';
// import './index.css';
import { FirstModal } from './Modal/FirstModal';
import { useNavigate } from 'react-router-dom';
import Email from './Email';
import Header from '../../components/Header/Header';
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
        <Email />
      </div>
    </div>
  );
}

export default WriteScreen;
