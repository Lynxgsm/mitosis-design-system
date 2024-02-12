import { Color } from '../base/colors';
import { Size } from '../base/sizes';

export type ButtonProps = Partial<HTMLButtonElement> & {
  message?: string;
  backgroundColor?: Color;
  size?: Size;
};
