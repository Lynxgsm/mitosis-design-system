import { writeFileSync } from 'fs';
import { ColorValues } from '../tokens/colors';
import { STYLES } from './utils/paths';

export const generateColors = () => {
  // Create colors file
  const colorValues = Object.keys(ColorValues).reduce((a, c) => {
    return `${a}\n$${c}:${ColorValues[c]};`;
  }, '');

  writeFileSync(STYLES.COLORS as string, colorValues);
};
