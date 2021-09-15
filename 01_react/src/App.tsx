import styled from '@emotion/styled';
import { memo, useCallback, useEffect, useState } from 'react';

import { initialKeyboard, keyboard, KeyboardEvent } from './api/keyboard';
import { Reset } from './components';

const Container = styled.div({
  height: '100vh',
  backgroundColor: '#000000',
});

const CharacterContainer = styled.div({});

const Character = styled.div({});

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
        <CharacterContainer>
          <Character></Character>
        </CharacterContainer>
      </Container>
    </>
  );
};

export default memo(App);
