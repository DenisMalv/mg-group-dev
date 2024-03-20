const Dotenv = require('dotenv-webpack');

module.exports = {
  // Остальные настройки вебпака
  plugins: [
    new Dotenv()
  ]
};