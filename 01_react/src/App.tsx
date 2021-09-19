import { memo, useCallback, useEffect, useState } from 'react';

import {
  initialKeyboard,
  KeyboardEvent,
  keyboardEventListener,
} from './api/keyboard';
import { Character, Reset, Screen } from './components';

const App = () => {
  const [keyboard, setKeyboard] = useState(initialKeyboard);

  const onKeyboard = useCallback((keyboard: KeyboardEvent) => {
    setKeyboard((prev) => ({ ...prev, ...keyboard }));
  }, []);

  useEffect(() => {
    keyboardEventListener(onKeyboard);
  }, [onKeyboard]);

  return (
    <>
      <Reset />

      <Screen>
        <Character keyboard={keyboard} />
      </Screen>
    </>
  );
};

export default memo(App);
