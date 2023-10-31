import { Header, List, Nav, Title, Wrap } from './AppBar.styled';
import { FaHeart, FaHome, FaCar } from 'react-icons/fa';

export const AppBar = () => {
  return (
    <Header>
      <Wrap>
        <Title>Car rental</Title>
        <List>
          <li>
            <Nav to="/">
              <FaHome /> <span>Home page</span>
            </Nav>
          </li>
          <li>
            <Nav to="/catalog">
              <FaCar /> <span>Catalog</span>
            </Nav>
          </li>
          <li>
            <Nav to="/favorites">
              <FaHeart />
            </Nav>
          </li>
        </List>
      </Wrap>
    </Header>
  );
};
