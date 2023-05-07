import { useState } from 'react';
import '../src/css/App.css';
import Menu from './components/Menu';
import Boats from './components/Boats';

function App() {
  const [view,setView]=useState(false)
  return (
    <div className='App'>
    {view?
    <Boats/>
    :
    <Menu setView={setView}/>
    }
    </div>
  );
}

export default App;
