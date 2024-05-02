import React, {useState} from 'react'
import TopBar from './components/TopBar'
import Home from './components/Home'
import About from './components/About'
import InProgress from './components/InProgress'


function App() {

  const [page, setPage] = useState("Home")
  return (
    <div>
      <TopBar setPage={setPage} />
      {page === 'Home' && <Home />}
      {page === 'About' && <About />}
      {page !== 'Home' && <InProgress />}
    </div>
  );
}

export default App;
