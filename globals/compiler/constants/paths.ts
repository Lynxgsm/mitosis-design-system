import { resolve } from 'path';

const BEFORE_REACT_PACKAGE = resolve(
  __dirname,
  '../../../',
  'packages',
  'react'
);
const REACT_PACKAGE = resolve(__dirname, '../../../', 'packages', 'ds-react');

const REACT_COMPONENTS = resolve(REACT_PACKAGE, 'src/components');
const REACT_SRC = resolve(REACT_PACKAGE, 'src');

export { BEFORE_REACT_PACKAGE, REACT_COMPONENTS, REACT_PACKAGE, REACT_SRC };
