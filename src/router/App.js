import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../pages/main';
import CommunityScreen from '../pages/community';
import TemplateScreen from '../pages/template';
import WriteScreen from '../pages/write';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/write" element={<WriteScreen />} />
          <Route path="/community" element={<CommunityScreen />} />
          <Route path="/template" element={<TemplateScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
