import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  onClick: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  color: ${props => props.color || 'white'};
  background-color: ${props => props.backgroundColor || 'black'};

`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton onClick={props.onClick} color={props.color} backgroundColor={props.backgroundColor}>
      Button!
    </StyledButton>
  );
}

export default Button;
