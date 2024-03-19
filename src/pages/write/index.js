import { useEffect, useState } from 'react';
import './index.css';
import { FirstModal } from './Modal/FirstModal';
import { useNavigate } from 'react-router-dom';
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
    </div>
  );
}

export default WriteScreen;
