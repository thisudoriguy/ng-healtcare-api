module.exports = {
    "extends": [
        "airbnb-base",
        "prettier",
        "prettier/react"
    ],
    parser: 'babel-eslint',
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures":{
            "experimentalObjectRestSpread": true,
        }
      }
};