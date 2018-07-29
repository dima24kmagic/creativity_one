module.exports = env => {
  console.log(env);

  const prod = 'production';
  const dev = 'development';
  return {
    mode: env.mode,
    entry: './index',
    watch: env.mode === prod ? false : true,
    output: {
      path: __dirname + '/dist',
      filename: 'app.js'
    }
  };
};
