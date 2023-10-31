import { Link } from 'react-router-dom';
import { FooterWrap } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrap>
      <p>Open daily 10:00 to 18:00</p>
      <Link to="tel:+380730000000">+38 (073) 000-00-00</Link>
      <Link to="email:example@gmail.com">example@gmail.com</Link>
    </FooterWrap>
  );
};
