import { useEffect, useState } from 'react';
import InputField from './InputField';
import './index.css';

function WriteScreen() {
  const [title, setTitle] = useState('');
  const [greeting, setGreeting] = useState('');
  const [body, setBody] = useState('');
  const [conclusion, setConclusion] = useState('');

  return (
    <div>
      <div className="Inputs">
        <InputField label="제목" value={title} setValue={setTitle} />
        <InputField label="인사말" value={greeting} setValue={setGreeting} />
        <InputField
          label="본문"
          value={body}
          setValue={setBody}
          isTextArea={true}
        />
        <InputField
          label="맺음말"
          value={conclusion}
          setValue={setConclusion}
        />
      </div>
    </div>
  );
}

export default WriteScreen;
