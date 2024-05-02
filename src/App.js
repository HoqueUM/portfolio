import React, {useState} from 'react'
import TopBar from './components/TopBar'


function App() {

  const [page, setPage] = useState("Home")
  return (
    <div>
      <TopBar />
      {page === "Home" &&
        <Home />
      }
    </div>
  );
}

export default App;
