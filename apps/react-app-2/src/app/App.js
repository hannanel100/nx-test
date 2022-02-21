import { useState } from 'react';
import styles from './App.module.css';
import { Button } from '@nx-test/shared-components';

export function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.flex}>
      <Button onClick={() => setClicked(true)} />
      {clicked && <div>clicked</div>}
    </div>
  );
}
export default App;
