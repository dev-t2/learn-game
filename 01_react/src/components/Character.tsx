import { FC, memo, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { Keyboard } from '../api/keyboard';
import { spriteAnimation } from '../api/animation';
import { clearInterval, setInterval } from 'timers';

const SPEED = 10;

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

interface ICharacter {
  keyboard: Keyboard;
}

const Character: FC<ICharacter> = ({ keyboard }) => {
  const [motion, setMotion] = useState<Motion>('idle');
  const [isFlip, setIsFlip] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (keyboard.ArrowLeft !== keyboard.ArrowRight) {
        if (keyboard.ArrowLeft) {
          setIsFlip(true);
          setPosition((prev) => prev - SPEED);
        }

        if (keyboard.ArrowRight) {
          setIsFlip(false);
          setPosition((prev) => prev + SPEED);
        }

        setMotion('run');
      } else if (keyboard.Space) {
        setMotion('attack');
      } else {
        setMotion('idle');
      }
    }, 20);

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
