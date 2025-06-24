import './App.css';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/LandingPage" element={<LandingPage />}/>
    </Routes>

 );
}

export default App;
