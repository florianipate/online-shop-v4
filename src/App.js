import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import NewIn from './routes/newIn/newIn.component';
const App = () => {
  return (
    <Routes>
      <Route index element = { <Home /> } />
      <Route path='/newIn' element = { <NewIn /> } />
    </Routes> 
  );
}

export default App;
