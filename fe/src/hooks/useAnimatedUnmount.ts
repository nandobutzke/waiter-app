import { useEffect, useState } from 'react';
import { useCustomRef } from './useCustomRef';

export default function useAnimatedUnmount(visible: boolean) {
  const [shouldRender, setShouldRender] = useState(visible);

  const animatedRefElement = useCustomRef<HTMLDivElement>();

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    function handleRemoveAnimation() {
      setShouldRender(false);
    }

    const elementRef = animatedRefElement.current;

    if (!visible && elementRef) {
      elementRef.addEventListener('animationend', handleRemoveAnimation);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleRemoveAnimation);
      }
    };
  }, [visible]);

  return {
    shouldRender,
    animatedRefElement,
  };
}
