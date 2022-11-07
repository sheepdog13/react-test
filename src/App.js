import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Memo from './components/Memo';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/memo' element={<Memo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
