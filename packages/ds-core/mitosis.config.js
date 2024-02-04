module.exports = {
  files: 'src/**',
  targets: ['vue3', 'react'],
  options: {
    react: {
      typescript: true,
      stylesType: 'styled-jsx',
    },
  },
};
