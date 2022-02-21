import styled from 'styled-components';
import { SharedComponents } from '@nx-test/shared-components';
import { Button } from '@nx-test/shared-components';
import { useState } from 'react';
const StyledApp = styled.div`
  background-color: red;
  // Your style here
`;

export function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <StyledApp>
      <Button
        onClick={() => setClicked(!clicked)}
        color="red"
        backgroundColor="blue"
      />
      <SharedComponents />
      {clicked ? 'Clicked!' : 'Not clicked'}
    </StyledApp>
  );
}

export default App;
