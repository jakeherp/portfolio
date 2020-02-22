import React, { memo, useRef } from 'react';
import styled from 'styled-components';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInvertedBorderRadius } from '../../../hooks/useInvertedBorder';
import { Title } from './Title';
import { Image } from './Image';
import { openSpring, closeSpring } from './animations';
import { useScrollConstraints } from '../../../hooks/useScrollContraints';
import { useWheelScroll } from '../../../hooks/useWheelScroll';

interface IProps {
  backgroundColor: string;
  category: string;
  data: {
    category: string;
    client: string;
    content: any;
    featuredImage: any;
    slug: string;
    title: string;
  };
  history: {
    push: (route: string) => void;
  };
  id: string;
  isSelected: boolean;
  pointOfInterest: string;
  title: string;
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

const options: any = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <p>{children}</p>,
  },
};

export const Card = memo(
  ({ backgroundColor = '#000', history, isSelected, data }: IProps) => {
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      y.get() > dismissDistance && history.push('/');
    }

    function checkZIndex(latest) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );

    return (
      <StyledCard ref={containerRef}>
        <Overlay isSelected={isSelected} />
        <div className={`card-content-container ${isSelected && 'open'}`}>
          <Content
            ref={cardRef}
            style={{ ...inverted, zIndex, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? 'y' : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <Image
              src={data.featuredImage.fluid.src}
              isSelected={isSelected}
              backgroundColor={backgroundColor}
            />
            <Title
              title={data.title}
              category={data.category}
              isSelected={isSelected}
            />
            {documentToReactComponents(data.content, options)}
          </Content>
        </div>
        {!isSelected && (
          <Link to={`/portfolio/${data.slug}`} className={`card-open-link`} />
        )}
      </StyledCard>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

const Overlay = ({ isSelected }) => (
  <StyledOverlay
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
  >
    <Link to="/portfolio" />
  </StyledOverlay>
);

const StyledCard = styled.li`
  position: relative;
  padding: 25px;
  height: 460px;
  flex: 0 0 40%;
  max-width: 40%;
  list-style: none;
  padding: 0;
  margin: 0;

  .card-open-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    flex: 0 0 60%;
    max-width: 60%;
  }

  @media only screen and (max-width: 800px) {
    flex: 0 0 50%;
    max-width: 50%;

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media only screen and (max-width: 600px) {
    flex: 1 0 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
`;

const Content = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  pointer-events: none;

  &.open {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    padding: 40px 0;

    .card-content {
      height: auto;
      max-width: 700px;
      overflow: hidden;
    }

    @media only screen and (max-width: 600px) {
      .open {
        padding: 0;
      }
    }
  }

  .card-content {
    pointer-events: auto;
    position: relative;
    border-radius: 20px;
    background: #1c1c1e;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .card-open-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .category {
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

const StyledOverlay = styled(motion.div)`
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 990px;

  a {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: 50%;

    transform: translateX(-50%);
  }
`;
