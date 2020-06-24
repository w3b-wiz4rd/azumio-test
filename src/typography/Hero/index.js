import styled from 'styled-components';

const Hero = styled.h1`
  /* Display & Box Model */
  margin: ${props => props.margin || props.theme.typography.defaultBoxModel.margin};
  /* Text */
  font-size: ${props => props.theme.typography.hero.fontSizes.mobile};
  font-weight: bolder;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: ${props => props.theme.typography.defaultBoxModel.letterSpacing};
  text-align: ${props => props.textAlign || props.theme.typography.defaultBoxModel.textAlign};
  /* Styling */
  color: ${props => props.theme.typography.hero.mainColor};
`;

export default Hero;
