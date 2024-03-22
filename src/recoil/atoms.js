import { atom } from 'recoil';

export const contentsState = atom({
  key: 'contentsState', // 고유한 key 값
  default: {
    title: { text: '', length: 0 },
    greet: { text: '', length: 0 },
    main: { text: '', length: 0 },
    conclude: { text: '', length: 0 },
  },
});

export const isInputedState = atom({
  key: 'isInputedState',
  default: {
    title: false,
    greet: false,
    main: false,
    conclude: false,
  },
});

export const formDataState = atom({
  key: 'formDataState',
  default: {
    sendName: '',
    sendInput: '',
    recipientName: '',
    situation: '',
    target: '',
  },
});
