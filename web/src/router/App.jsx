/* eslint-disable react-refresh/only-export-components */
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Search from '../pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/items" element={ <Search /> } />
        <Route path="/items/:id" element={ <Detail /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
