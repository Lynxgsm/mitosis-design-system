import { resolve } from 'path';

const BASE_STYLE_PATH = resolve(__dirname, '..', '..', 'styles', 'base');
const BASE_TEMPLATE_PATH = resolve(__dirname, '..', 'templates');

export type StylePaths = {
  COLORS: string;
  PADDING: string;
  MARGIN: string;
};

export type TemplatePaths = {
  PADDING: string;
  MARGIN: string;
};

export const STYLES: StylePaths = {
  COLORS: resolve(BASE_STYLE_PATH, '_colors.scss'),
  PADDING: resolve(BASE_STYLE_PATH, '_paddings.scss'),
  MARGIN: resolve(BASE_STYLE_PATH, '_margins.scss'),
};

export const TEMPLATES: TemplatePaths = {
  PADDING: resolve(BASE_TEMPLATE_PATH, 'padding.scss'),
  MARGIN: resolve(BASE_TEMPLATE_PATH, 'margin.scss'),
};
