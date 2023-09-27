import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard"
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Friends from './views/Friends';
import Login from './views/Login';
import SignUp from './views/SignUp';
import About from './views/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}


export default App;
