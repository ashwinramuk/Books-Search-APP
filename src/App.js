import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Component/Landing_Page/Landing_page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BOOK SEARCH</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/*" element={<>Error 404!!! Page Not Found</>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
