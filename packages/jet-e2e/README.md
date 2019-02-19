# jet-e2e

Provides encapsulation of jest and puppeteer configuration, which provides quick configuration of E2E tests.

## Installation

Install with `npm`:

```sh
$ npm install --save-dev @qulix/jet-e2e
```

Install with `yarn`:
```sh
$ yarn add --dev @qulix/jet-e2e
```

## Libraries that are included in the package

- [Jest](https://jestjs.io/en)
- [TypeScript](https://www.typescriptlang.org/index.html)
- [puppeteer](https://pptr.dev/)

# Example

```ts
// yandex-music.e2e.test.ts

describe('Yandex Music', () => {

  it('should display "Yandex Music" page', async () => {
    await page.goto('https://music.yandex.by');
  });

});
```

## License

[MIT](./LICENSE.md)
