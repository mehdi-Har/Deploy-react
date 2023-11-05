
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { FORME } from './screen/form';
import { FORM2 } from './screen/form2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="Deploy-react" element={<FORME />} />
        <Route path="/form2" element={<FORM2 />} />
      </Routes>
    </Router>
  );
}

export default App;
