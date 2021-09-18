import { FC, memo } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const PUBLIC_URL = process.env.PUBLIC_URL;

const Container = styled.div({
  width: 377,
  height: 458,
});

const Animation = keyframes`
  from { background-position-x: 0 }
  to { background-position-x: -3770px }
`;

interface ISpriteImage {
  motion: 'idle' | 'run' | 'attack';
}

const SpriteImage = styled.div<ISpriteImage>(({ motion }) => ({
  height: '100%',
  backgroundImage: `url(${PUBLIC_URL}/image/character/${motion}.png)`,
  animation: `${Animation} 0.5s infinite steps(10)`,
}));

interface ICharacter {
  motion: 'idle' | 'run' | 'attack';
}

const Character: FC<ICharacter> = ({ motion }) => {
  return (
    <Container>
      <SpriteImage motion={motion} />
    </Container>
  );
};

export default memo(Character);
