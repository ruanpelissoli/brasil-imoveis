import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Search } from './pages/Search';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/procurar' replace />} />
      <Route path='/procurar' element={<Search />} />
    </Routes>
  );
}

export default AppRouter;
