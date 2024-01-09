import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Login from './components/Login/Login';

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
          <Login />
        </Typography>
      </Container>
    </div>
  );
}

export default App;
