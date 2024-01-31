import Login from 'src/components/Login/Login';
import {
  Navigate,
  Route, BrowserRouter as Router, Routes,
} from 'react-router-dom';

function AdminRoutes() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AdminRoutes;
