import { Container, Navbar } from 'react-bootstrap';
import style from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <Navbar className={`navbar ${style.navigation}`}>
      <Container>
        <Navbar.Brand href='#home'>Brasil Imóveis</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text></Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
