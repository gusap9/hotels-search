import { useState } from 'react';
import './css/App.css';
import Login from './pages/Login_page';
import Main from './pages/Main_page';

function App() {
  const [page, setPage] = useState(true)
  return (
    <div className="App">
      {(page) && <Login setPage={setPage} />}
      {(!page) && <Main setPage={setPage} />}
    </div>
  );
}

export default App;
