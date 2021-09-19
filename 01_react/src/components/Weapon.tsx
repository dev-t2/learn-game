import { FC, memo } from 'react';
import styled from '@emotion/styled';

interface IContainer {
  left: number;
  bottom: number;
}

const Container = styled.div<IContainer>(({ left, bottom }) => ({
  width: 160,
  height: 32,
  backgroundImage: `url(${process.env.PUBLIC_URL}/image/weapon/weapon.png)`,
  position: 'absolute',
  left,
  bottom,
  zIndex: 1,
}));

export interface IWeapon {
  left: number;
  bottom: number;
}

const Weapon: FC<IWeapon> = ({ left, bottom }) => {
  return <Container left={left} bottom={bottom} />;
};

export default memo(Weapon);
