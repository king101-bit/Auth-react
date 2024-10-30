import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Loginpage';
import Success from './Pages/Successpage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;