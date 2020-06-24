import styled, { css } from 'styled-components';
/* Typography */
import { Paragraph } from 'typography';
/* Colors */
import { colors, theme } from 'config';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  height: 100%;
`;

export const Text = styled(Paragraph)`
  /* Display & Box Model */
  flex: 1;
  margin: 0;
  /* Styling */
  color: ${colors.gray};
  /* Text */
  font-size: 1.7rem;
  font-weight: normal;
  text-transform: uppercase;
  /* Other */
  cursor: pointer;
  /* Checked */
  ${props =>
    props.highlight &&
    css`
      /* Styling */
      color: ${colors.purple};
      font-weight: 900;
    `};
`;

export const Header = styled.div`
  /* Display & Box Model */
  flex: 2;
`;

export const Footer = styled.div`
  /* Display & Box Model */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Areas = styled.div`
  /* Display & Box Model */
  flex: 4;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Area = styled.div`
  /* Display & Box Model */
  flex-basis: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
  /* Styling */
  border-radius: 1rem;
  border: 1px solid ${colors.gray};
  color: ${colors.gray};
  transition: all 0.5s ease;
  /* Text */
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  /* Other */
  cursor: pointer;
  /* Checked */
  ${props =>
    props.isChecked &&
    css`
      background: ${colors.purple};
      border: 1px solid ${colors.purple};
      color: white;
      box-shadow: ${theme.common.purpleShadow};
    `};
`;

export const Dots = styled.div`
  /* Display & Box Model */
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${colors.lightGray};
  margin-right: 1rem;
  /* Other */
  cursor: pointer;
  /* Active */
  ${props =>
    props.active &&
    css`
      background: ${colors.purple};
      width: 1.2rem;
      height: 1.2rem;
    `};
`;
