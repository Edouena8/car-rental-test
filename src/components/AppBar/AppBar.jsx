import { useLocation } from 'react-router-dom';
import { Container, Header, List, Nav, Title, Wrap } from './AppBar.styled';
import { FaHeart, FaHome, FaCar } from 'react-icons/fa';

export const AppBar = () => {
  const location = useLocation();
  return (
    <Header>
      <Container>
        <Wrap>
          <Title>Car rental</Title>
          <List>
            <li>
              <Nav to="/">
                <FaHome /> <span>Home</span>
              </Nav>
            </li>
            <li>
              <Nav to={location.state?.from ?? '/catalog'}>
                <FaCar /> <span>Catalog</span>
              </Nav>
            </li>
            <li>
              <Nav to="/favorites" state={{ from: location }}>
                <FaHeart />
                <span>Favorites</span>
              </Nav>
            </li>
          </List>
        </Wrap>
      </Container>
    </Header>
  );
};
