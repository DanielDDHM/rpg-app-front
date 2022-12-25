import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Initial from '../pages/initial/initial';
import Auth from '../pages/login';
import Recover from '../pages/recover';
import Register from '../pages/register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/initial" element={<Initial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
