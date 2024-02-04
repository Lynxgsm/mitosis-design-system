import { readFileSync, writeFileSync } from 'fs';
import { STYLES, TEMPLATES } from './utils/paths';

const steps = 2;
const final = 36;

const replaceValues = (origin: string, destination: string) => {
  try {
    let values = readFileSync(origin).toString();
    values.includes('@steps');
    values = values.replace('@steps', String(steps));
    values = values.replace('@final', String(final));

    writeFileSync(destination, values);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const generatePaddings = () => replaceValues(TEMPLATES.PADDING, STYLES.PADDING);
const generateMargins = () => replaceValues(TEMPLATES.MARGIN, STYLES.MARGIN);

export { generateMargins, generatePaddings };
