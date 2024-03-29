import {
  BEFORE_REACT_PACKAGE,
  REACT_COMPONENTS,
  REACT_PACKAGE,
  REACT_SRC,
} from '../constants/paths';
import {
  copy,
  exists,
  readFileSync,
  readdirSync,
  remove,
  writeFileSync,
} from 'fs-extra';
import { resolve } from 'path';

export const processReactPackage = async () => {
  console.log('Processing react package...');
  await copyReactPackageContent();
  console.log('Creating index file...');
  createIndexFile();
  console.log('Done exporting react package...');
};

export const copyReactPackageContent = async () => {
  try {
    if ((await exists(BEFORE_REACT_PACKAGE)) && (await exists(REACT_PACKAGE))) {
      await copy(BEFORE_REACT_PACKAGE, REACT_PACKAGE);
      await remove(BEFORE_REACT_PACKAGE);
      console.info(`⚡️ React package copied successfully...`);
    }
  } catch (error) {
    console.error(
      `No react package found! Please verify that the path ${BEFORE_REACT_PACKAGE} exits`
    );
  }
};

export const createIndexFile = async () => {
  const components = listComponents();
  let indexContent = '';
  let exportComponents = '';

  for (let c of components) {
    indexContent =
      indexContent +
      `import ${c.component} from './components/${c.name}/${c.name}'\n`;
  }

  exportComponents = generateExport(components);

  writeFileSync(
    resolve(REACT_SRC, 'index.ts'),
    `${indexContent}\n${exportComponents}`
  );
};

export const generateExport = (
  components: { component: string; name: string }[]
) => {
  let content = 'export {';

  for (let { component } of components) {
    content = content + component + ',\n';
  }
  return `${content}}`;
};

const listComponents = () => {
  const components = readdirSync(REACT_COMPONENTS);
  return components.reduce<{ component: string; name: string }[]>((a, c) => {
    const info = readFileSync(
      resolve(REACT_COMPONENTS, `${c}/${c}.tsx`)
    ).toString();
    const name =
      info.split('\n').find((i) => i.startsWith('export default')) ?? '';
    return [
      {
        name: c,
        component: name.replace('export default ', '').replace(';', ''),
      },
      ...a,
    ];
  }, []);
};
