import './Email.css';
import '@radix-ui/themes/styles.css';
import { Theme, Button, Flex, TextArea, TextField } from '@radix-ui/themes';
import { useState } from 'react';

export default function Email() {
  const [contents, setContents] = useState({
    tittle: '',
    greet: '',
    main: '',
    conclude: '',
  });

  return (
    <div className="container">
      <Theme>
        <Flex direction="column" gap="4" style={{ maxWidth: 1050 }}>
          <TextArea className="title" size="1" placeholder="제목" />
          <TextArea className="greet" size="2" placeholder="인사말" />
          <TextArea className="main" size="3" placeholder="본문" />
          <TextArea className="conclude" size="2" placeholder="맺음말" />
        </Flex>
      </Theme>
      <div className="right-container"></div>
    </div>
  );
}
