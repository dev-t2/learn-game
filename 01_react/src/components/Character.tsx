import { FC, memo, useEffect, useState } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Keyboard } from '../api/keyboard';

const Container = styled.div({
  width: 377,
  height: 458,
});

const Animation = keyframes`
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
  animation: `${Animation} 0.5s infinite steps(10)`,
}));

interface ICharacter {
  keyboard: Keyboard;
}

const Character: FC<ICharacter> = ({ keyboard }) => {
  const [motion, setMotion] = useState<Motion>('idle');
  const [isFlip, setIsFlip] = useState(false);

  useEffect(() => {
    if (keyboard.ArrowLeft !== keyboard.ArrowRight) {
      if (keyboard.ArrowLeft) {
        setIsFlip(true);
      }

      if (keyboard.ArrowRight) {
        setIsFlip(false);
      }

      setMotion('run');
    } else if (keyboard.Space) {
      setMotion('attack');
    } else {
      setMotion('idle');
    }
  }, [keyboard]);

  return (
    <Container>
      <SpriteImage motion={motion} isFlip={isFlip} />
    </Container>
  );
};

export default memo(Character);
