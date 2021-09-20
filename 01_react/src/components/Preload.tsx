import { memo } from 'react';
import styled from '@emotion/styled';

const PreloadImage = styled.img({
  display: 'none',
});

const path = `${process.env.PUBLIC_URL}/image`;

const images = [
  `${path}/character/attack.png`,
  `${path}/character/idle.png`,
  `${path}/character/run.png`,
  `${path}/weapon/weapon.png`,
];

const Preload = () => {
  return (
    <div>
      {images.map((image, index) => (
        <PreloadImage key={index} src={image} />
      ))}
    </div>
  );
};

export default memo(Preload);
