import * as React from 'react';
import styled from 'styled-components';
import { motion, useInvertedScale } from 'framer-motion';
import { closeSpring, openSpring } from './animations';

export const Title = ({ title, category, isSelected }) => {
  const inverted = useInvertedScale();
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <Container
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <span className="category">{category}</span>
      <h2>{title}</h2>
    </Container>
  );
};

/**
 * `transform` is order-dependent, so if you scale(0.5) before translateX(100px),
 * the visual translate will only be 50px.
 *
 * The intuitive pattern is to translate before doing things like scale and
 * rotate that will affect the coordinate space. So Framer Motion takes an
 * opinion on that and allows you to animate them
 * individually without having to write a whole transform string.
 *
 * However in this component we're doing something novel by inverting
 * the scale of the parent component. Because of this we want to translate
 * through scaled coordinate space, and can use the transformTemplate prop to do so.
 */
const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 300px;

  h2 {
    color: #fff;
    margin: 8px 0;
  }
`;
