import styled from 'styled-components';
const StyledHeader = styled.div`
  color: pink;
`;
export function Header(props) {
  return (
    <StyledHeader>
      <h1>Welcome to Header!</h1>
    </StyledHeader>
  );
}
export default Header;
