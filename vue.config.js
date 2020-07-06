module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/icbc-knowledge-test/' : '/',
  filenameHashing: false,
  outputDir: 'docs',
};
