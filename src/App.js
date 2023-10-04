import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#EDF1F6' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page/:page" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
