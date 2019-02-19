'use strict';

module.exports = [
  {
    package: 'e2e',
    filename: 'jest.config.js',
    ext: 'js',
    content: [
      `'use strict';`,
      ``,
      `const { jetE2EConfig } = require('jet-e2e');`,
      ``,
      `module.exports = {`,
      `  ...jetE2EConfig,`,
      `  // Write Your own config`,
      `};`,
      ``,
    ].join('\n'),
  },
  {
    package: 'react',
    filename: 'jest.config.js',
    ext: 'js',
    content: [
      `'use strict';`,
      ``,
      `const { jetReactConfig } = require('jet-react');`,
      ``,
      `module.exports = {`,
      `  ...jetReactConfig,`,
      `  // Write Your own config`,
      `}`,
      ``,
    ].join('\n'),
  }
]
