import { FC, memo, useEffect, useRef, useState } from 'react';
import { clearInterval, setInterval } from 'timers';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Keyboard } from '../api/keyboard';
import { IWeapon } from './Weapon';

interface IContainer {
  left: number;
}

const Container = styled.div<IContainer>(({ left }) => ({
  width: 377,
  height: 458,
  position: 'fixed',
  bottom: 0,
  left,
  zIndex: 2,
}));

const spriteAnimation = keyframes`
  from { background-position-x: 0 }
  to { background-position-x: -3770px }
`;

type Motion = 'idle' | 'run' | 'attack';

interface ISpriteImage {
  motion: Motion;
  isFlip: boolean;
}

const SpriteImage = styled.div<ISpriteImage>(({ motion, isFlip }) => ({
  height: '100%',
  backgroundImage: `url(${process.env.PUBLIC_URL}/image/character/${motion}.png)`,
  transform: isFlip ? 'rotateY(180deg)' : undefined,
  animation: `${spriteAnimation} 0.5s infinite steps(10)`,
}));

const speed = 10;

interface ICharacter {
  keyboard: Keyboard;
  onAttack: (weapon: IWeapon) => void;
}

const Character: FC<ICharacter> = ({ keyboard, onAttack }) => {
  const [isFlip, setIsFlip] = useState(false);
  const [motion, setMotion] = useState<Motion>('idle');
  const [left, setLeft] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (keyboard.Space) {
        setMotion('attack');
      } else if (
        keyboard.ArrowLeft !== keyboard.ArrowRight &&
        keyboard.ArrowLeft
      ) {
        setIsFlip(true);
        setMotion('run');
        setLeft((prev) => prev - speed);
      } else if (
        keyboard.ArrowLeft !== keyboard.ArrowRight &&
        keyboard.ArrowRight
      ) {
        setIsFlip(false);
        setMotion('run');
        setLeft((prev) => prev + speed);
      } else {
        setMotion('idle');
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [keyboard]);

  useEffect(() => {
    if (motion === 'attack' && ref.current) {
      onAttack({
        left: left + ref.current.offsetWidth / 2,
        bottom: ref.current.offsetHeight / 2,
      });
    }
  }, [motion, onAttack, left]);

  return (
    <Container left={left}>
      <SpriteImage ref={ref} motion={motion} isFlip={isFlip} />
    </Container>
  );
};

export default memo(Character);
