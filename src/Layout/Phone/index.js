import React from 'react';
/* Styled Components */
import { Container, PhoneContainer, Content, Phone, Logo } from './styled';
/* Assets */
import phone from '../../assets/ios_phone.png';
import logo from '../../assets/logo.png';

const PhoneLayout = ({ children }) => {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <PhoneContainer>
        <Phone src={phone} alt="Phone" />
        <Content>{children}</Content>
      </PhoneContainer>
    </Container>
  );
};

export default PhoneLayout;
