module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:prettier/recommended',
		
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'prettier/prettier': ["error", {
      "trailingComma": "none",
			"tabWidth": 2,
			"semi": false,
			"singleQuote": true,
			"jsxSingleQuote": true,
			"printWidth": 120,
			"arrowParens": "avoid",
			"bracketSpacing": true,
			"jsxBracketSameLine": false
    }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    }
  }
}