import { FC, memo, useEffect, useState } from 'react';
import { clearInterval, setInterval } from 'timers';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Keyboard } from '../api/keyboard';

interface IContainer {
  position: number;
}

const Container = styled.div<IContainer>(({ position }) => ({
  width: 377,
  height: 458,
  position: 'fixed',
  bottom: 0,
  left: position,
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
}

const Character: FC<ICharacter> = ({ keyboard }) => {
  const [isFlip, setIsFlip] = useState(false);
  const [motion, setMotion] = useState<Motion>('idle');
  const [position, setPosition] = useState(0);

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
        setPosition((prev) => prev - speed);
      } else if (
        keyboard.ArrowLeft !== keyboard.ArrowRight &&
        keyboard.ArrowRight
      ) {
        setIsFlip(false);
        setMotion('run');
        setPosition((prev) => prev + speed);
      } else {
        setMotion('idle');
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [keyboard]);

  return (
    <Container position={position}>
      <SpriteImage motion={motion} isFlip={isFlip} />
    </Container>
  );
};

export default memo(Character);
