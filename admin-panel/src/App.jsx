import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Update from './components/Update';
import Read from './components/Read';
import Create from './components/Create';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './LogIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/login" element={<LogIn />} />

      </Routes>
    </div>
  );
}

export default App;
