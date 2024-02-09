const ColorValues = ['nebula-blue', 'cobalt', 'supernova', 'black'] as const;
type Color = (typeof ColorValues)[number];

const ColorStyles: { [key: Color]: string } = {
  ['nebula-blue']: '',
};
