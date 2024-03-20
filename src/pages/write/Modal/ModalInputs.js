import { useEffect, useState } from 'react';
import './ModalInputs.css';
import InputWithSelectBox from './InputWithSelect';
import '@radix-ui/themes/styles.css';

function ModalInputs() {
  const [formData, setFormData] = useState({
    sendName: '',
    sendInput: '',
    recipientName: '',
    situation: '',
    length: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //selectBox 아이디를 사용해야 할 것 같은뎁....
  //modal 닫으면 홈으로 이동.... 추가
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <p className="question">메일을 보내는 분은 누구인가요?</p>
      <div className="Q">
        <p>From</p>
        <input
          className="name-input"
          placeholder="텍스트 입력"
          name="sendName"
          value={formData.sendName}
          onChange={handleChange}
        />
        <input
          className="name-input"
          placeholder="ex) 구름대학교 21학번"
          name="sendInput"
          value={formData.sendInput}
          onChange={handleChange}
        />
      </div>
      <p>메일을 받으실 분은 누구인가요?</p>
      <InputWithSelectBox
        inputName="recipientName"
        inputPlaceholder="이름입력"
        selectType="length"
        selectName="length"
        formData={formData}
        handleChange={handleChange}
      />
      <p>어떤 상황에 사용하시는 건가요?</p>
      <input
        className="situation-input"
        placeholder="상황입력"
        name="situation"
        value={formData.situation}
        onChange={handleChange}
      ></input>
      <div className="info">
        <p>
          입력된 내용을 바탕으로
          <br />
          AI 메일 작성 도와드릴게요!
        </p>
      </div>
    </div>
  );
}

export default ModalInputs;
