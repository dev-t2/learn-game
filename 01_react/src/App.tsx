import { memo, useCallback, useEffect, useState } from 'react';

import { keyboard } from './api';

const App = () => {
  const [key, setKey] = useState({});

  const onKeyboard = useCallback((key: {}) => {
    setKey((prev) => ({ ...prev, ...key }));
  }, []);

  console.log(key);

  useEffect(() => {
    keyboard(onKeyboard);
  }, [onKeyboard]);

  return <div>React App</div>;
};

export default memo(App);
