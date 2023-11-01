
import './App.css'
import { FORME } from './screen/form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NextPage} from './screen/form2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FORME />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
