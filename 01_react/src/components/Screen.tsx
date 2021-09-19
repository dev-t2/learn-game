import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  position: 'relative',
  height: '100vh',
});

interface IScreen {
  children: ReactNode;
}

const Screen: FC<IScreen> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(Screen);
