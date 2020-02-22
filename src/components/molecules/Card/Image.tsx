import * as React from 'react';
import styled from 'styled-components';
import { motion, useInvertedScale } from 'framer-motion';
import { closeSpring } from './animations';

export const Image = ({
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
  src,
}) => {
  const inverted = useInvertedScale();

  return (
    <ImageContainer
      className="card-image-container"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image"
        src={src}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </ImageContainer>
  );
};

const ImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 420px;
  width: 100vw;
  transform: translateZ(0);
`;
