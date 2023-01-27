import { Container } from 'react-bootstrap';

import AppRouter from './AppRouter';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Container>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
