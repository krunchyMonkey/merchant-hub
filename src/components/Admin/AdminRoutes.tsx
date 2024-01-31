import { Login } from '@mui/icons-material';
import {
  Route, Routes,
} from 'react-router-dom';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route />
    </Routes>
  );
}

export default AdminRoutes;
