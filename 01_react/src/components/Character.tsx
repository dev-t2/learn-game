import { FC, memo } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div({
  width: 377,
  height: 458,
});

type Motion = 'idle' | 'run' | 'attack';

const Animation = keyframes`
  from { background-position-x: 0 }
  to { background-position-x: -3770px }
`;

interface ISpriteImage {
  motion: Motion;
}

const SpriteImage = styled.div<ISpriteImage>(({ motion }) => ({
  height: '100%',
  backgroundImage: `url(${process.env.PUBLIC_URL}/image/character/${motion}.png)`,
  animation: `${Animation} 0.5s infinite steps(10)`,
}));

interface ICharacter {
  motion: Motion;
}

const Character: FC<ICharacter> = ({ motion }) => {
  return (
    <Container>
      <SpriteImage motion={motion} />
    </Container>
  );
};

export default memo(Character);
