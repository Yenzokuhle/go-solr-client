import { getTotalTopUps } from './utils';

describe('Return the sum of top ups', () => {
  test('Return R 300', () => {
    expect(
      getTotalTopUps([
        { name: 'itemOne', value: 200 },
        { name: 'itemTwo', value: 100 },
      ])
    ).toBe(300);
  });
});
