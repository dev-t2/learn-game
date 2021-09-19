import { memo, useCallback, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  initialKeyboard,
  KeyboardEvent,
  keyboardEventListener,
} from './api/keyboard';
import { IWeapon } from './components/Weapon';
import { Character, Reset, Screen, Weapon } from './components';

const App = () => {
  const [keyboard, setKeyboard] = useState(initialKeyboard);
  const [weapons, setWeapons] = useState<IWeapon[]>([]);

  const onKeyboard = useCallback((keyboard: KeyboardEvent) => {
    setKeyboard((prev) => ({ ...prev, ...keyboard }));
  }, []);

  useEffect(() => {
    keyboardEventListener(onKeyboard);
  }, [onKeyboard]);

  const onAttack = useCallback((weapon: IWeapon) => {
    setWeapons((prev) => [...prev, weapon]);
  }, []);

  return (
    <>
      <Reset />

      <Screen>
        <Character keyboard={keyboard} onAttack={onAttack} />

        {weapons.map((weapon) => {
          const key = nanoid();

          return <Weapon key={key} left={weapon.left} bottom={weapon.bottom} />;
        })}
      </Screen>
    </>
  );
};

export default memo(App);
