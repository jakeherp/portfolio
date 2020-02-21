import { useMotionValue, useInvertedScale } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Avoid the stretch/squashing of border radius by using inverting them
 * throughout the component's layout transition.
 *
 * It would be possible to animate to/from different radius, for instance
 * in mobile mode from rounded to square for full-screen panels, by passing
 * the calculated inverted transform to `layoutTransition` when set as a function.
 *
 * Those inverted scales could be provided here to act as a `from` value,
 * then we can use Popcorn's `mix` function to get our
 *
 * @param radius
 */
export function useInvertedBorderRadius(radius: number) {
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const inverted = useInvertedScale({ scaleX, scaleY });
  const borderRadius = useMotionValue(`${radius}px`);

  useEffect(() => {
    function updateRadius() {
      const latestX = inverted.scaleX.get();
      const latestY = inverted.scaleY.get();
      const xRadius = `${latestX * radius}px`;
      const yRadius = `${latestY * radius}px`;

      borderRadius.set(`${xRadius} ${yRadius}`);
    }

    const unsubScaleX = inverted.scaleX.onChange(updateRadius);
    const unsubScaleY = inverted.scaleY.onChange(updateRadius);

    return () => {
      unsubScaleX();
      unsubScaleY();
    };
  }, [radius]);

  return {
    scaleX,
    scaleY,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  };
}
