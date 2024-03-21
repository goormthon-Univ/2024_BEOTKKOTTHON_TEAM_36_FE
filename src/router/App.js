import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import MainScreen from '../pages/main';
import CommunityScreen from '../pages/community';
import TemplateScreen from '../pages/template';
import WriteScreen from '../pages/write';
import { Frame } from '../components/Frame';
import { RecoilRoot } from 'recoil';
import '../styles/globalStyle.css';
import Header from '../components/Header/Header';

function App() {
  return (
    <Theme>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route element={<Frame />}>
              <Route path="/" element={<MainScreen />} />
              <Route path="/community" element={<CommunityScreen />} />
              <Route path="/template" element={<TemplateScreen />} />
            </Route>
            <Route>
              <Route path="/write" element={<WriteScreen />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </Theme>
  );
}

export default App;
