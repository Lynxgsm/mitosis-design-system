import { generateColors } from './gen_colors';
import { generateMargins, generatePaddings } from './gen_padding_margin';
import { resetValues } from './utils/reset';

// RESETS
resetValues();

// GENERATE COLORS BASED ON TOKENS
generateColors();

// GENERATE PADDING AND MARGINS BASED ON STEPS AND FINAL VALUE
generateMargins();
generatePaddings();
