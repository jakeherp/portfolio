import { useState } from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    toggle: () => setValue(!value),
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  };
}
