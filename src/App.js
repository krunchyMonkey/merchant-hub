import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AdminRoutes from './components/Admin/AdminRoutes';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          <AdminRoutes />
        </Typography>
      </Container>
    </div>
  );
}

export default App;
