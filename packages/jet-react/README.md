# jet-react

Provides encapsulation of the jest configuration, which provides quick testing of your React application.

## Installation

Install with `npm`:

```sh
$ npm install --save-dev @qulix/jet-react
```

Install with `yarn`:
```sh
$ yarn add --dev @qulix/jet-react
```

## Libraries that are included in the package

- [Jest](https://jestjs.io/en)
- [TypeScript](https://www.typescriptlang.org/index.html)
- [Enzyme](https://airbnb.io/enzyme/docs/api)
- [Snapshot Serializers](https://github.com/adriantoine/enzyme-to-json)
- [react-test-renderer](https://reactjs.org/docs/test-renderer.html)

## Examples

```tsx
// example.test.tsx

import React from 'react';
import { shallow } from 'enzyme';

describe('Example', () => {

  it('should match snapshot', () => {
    const Text = () => <p>Text</p>;
    const wrapper = shallow(<Text />);
    expect(wrapper).toMatchSnapshot('<Text /> Snapshot');
  });

})
```

## License

[MIT](./LICENSE.md)
