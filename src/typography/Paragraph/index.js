import styled from 'styled-components';

const Paragraph = styled.p`
  /* Display & Box Model */
  margin: ${props => props.margin || props.theme.typography.defaultBoxModel.margin};
  /* Text */
  font-size: ${props => props.theme.typography.paragraph.fontSizes.mobile};
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: ${props => props.theme.typography.defaultBoxModel.letterSpacing};
  text-align: ${props => props.textAlign || props.theme.typography.defaultBoxModel.textAlign};
  /* Styling */
  color: ${props => props.theme.typography.paragraph.mainColor};
`;

export default Paragraph;
