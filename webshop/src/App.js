import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
  }

  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">{t('nav.home')}</Nav.Link>
              <Nav.Link as={Link} to="/tooted">{t('nav.products')}</Nav.Link>
              <Nav.Link as={Link} to="/kontakt">{t('nav.contact')}</Nav.Link>
              <Nav.Link as={Link} to="/ostukorv">{t('nav.cart')}</Nav.Link>
            </Nav>
            <img className="lang" onClick={() => changeLang("en")} src={require("./images/english.png")} alt="" />
            <img className="lang" onClick={() => changeLang("ee")} src={require("./images/estonian.png")} alt="" />
            <img className="lang" onClick={() => changeLang("ru")} src={require("./images/russian.png")} alt="" />
          </Container>
        </Navbar>

        <Routes>
          <Route path="" element={ <HomePage /> } />
          <Route path="tooted" element={ <Products /> } />
          <Route path="kontakt" element={ <Contact /> } />
          <Route path="ostukorv" element={ <Cart /> } />
        </Routes>
    </div>
  );
}

export default App;
