import { writeFileSync } from 'fs';
import { ColorValues } from 'ds-values';
import { STYLES } from './utils/paths';
import { Color } from 'typings';

export const generateColors = () => {
  // Create color files
  const colorValues = Object.keys(ColorValues).reduce((a, current) => {
    const c = current as Color;
    return `${a}\n$${c}:${ColorValues[c]};`;
  }, '');

  writeFileSync(STYLES.COLORS as string, colorValues);
};
