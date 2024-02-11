import { Color } from '../base/colors';

export type ButtonProps = Partial<HTMLButtonElement> & {
  message: string;
  backgroundColor: Color;
};
