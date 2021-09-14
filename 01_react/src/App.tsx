import { memo, useCallback, useEffect, useState } from 'react';

import { initialKeyboard, keyboard } from './api/keyboard';

const App = () => {
  const [keys, setKeys] = useState(initialKeyboard);

  const onKeyboard = useCallback((key: {}) => {
    setKeys((prev) => ({ ...prev, ...key }));
  }, []);

  console.log(keys);

  useEffect(() => {
    keyboard(onKeyboard);
  }, [onKeyboard]);

  return <div>React App</div>;
};

export default memo(App);
