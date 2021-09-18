import styled from '@emotion/styled';
import { memo, useCallback, useEffect, useState } from 'react';

import { initialKeyboard, keyboard, KeyboardEvent } from './api/keyboard';
import { Character, Reset } from './components';

const Container = styled.div({
  height: '100vh',
});

const App = () => {
  const [keys, setKeys] = useState(initialKeyboard);

  const onKeyboard = useCallback((keyboardEvent: KeyboardEvent) => {
    setKeys((prev) => ({ ...prev, ...keyboardEvent }));
  }, []);

  useEffect(() => {
    keyboard(onKeyboard);
  }, [onKeyboard]);

  console.log(keys);

  return (
    <>
      <Reset />

      <Container>
        <Character motion="idle" />
        <Character motion="run" />
        <Character motion="attack" />
      </Container>
    </>
  );
};

export default memo(App);
