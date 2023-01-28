import './App.css';
import {BrowserRouter ,Routes , Route } from 'react-router-dom';
import Login from './App/login/Login';

function App() {
  return (
    <div className="App">
      {/* <h1>Main page </h1> */}

<BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
    </Routes>
</BrowserRouter>
      
      
    </div>
  );
}

export default App;
