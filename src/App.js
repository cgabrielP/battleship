import { useState } from 'react';
import '../src/css/App.css';
import Table from './components/Table';
import Menu from './components/Menu';

function App() {
  const [view,setView]=useState(false)
  return (
    <div className='App'>
    {view?
    <Table/>
    :
    <Menu setView={setView}/>
    }
    </div>
  );
}

export default App;
