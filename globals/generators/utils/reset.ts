import { existsSync, unlinkSync } from 'fs';
import { STYLES, StylePaths } from './paths';

export const resetValues = () => {
  // REMOVE EXISTING FILES
  for (let token of Object.keys(STYLES) as Array<keyof StylePaths>) {
    const path = STYLES[token] as string;
    if (existsSync(path)) unlinkSync(path);
  }
};
