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
    target: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //selectBox 아이디를 사용해야 할 것 같은뎁....

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <hr />
      <p className="question">메일을 보내는 분은 누구인가요?</p>
      <hr />
      <div className="Q">
        {/* <label></label> */}
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
      <hr />
      <p>메일을 받으실 분은 누구인가요?</p>
      <hr />
      <InputWithSelectBox
        name="target"
        inputName="recipientName"
        inputPlaceholder="텍스트 입력"
        selectType="target"
        selectName="target"
        formData={formData.target}
        handleChange={handleChange}
      />
      <hr />
      <p>어떤 상황에 사용하시는 건가요?</p>
      <hr />
      <input
        className="situation-input"
        placeholder="ex) 증원 요청, 면담 요청, 시험 문의, 감사 인사"
        name="situation"
        value={formData.situation}
        onChange={handleChange}
      />
      <hr />
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
