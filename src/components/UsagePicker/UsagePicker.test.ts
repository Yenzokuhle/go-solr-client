const fn = (arr: string[]) => {
  return arr.map((item) => `Yow ${item}`);
};

describe('UsagePicker component tests', () => {
  test('this is the first test yow', () => {
    const actual = fn(['Alice', 'Bob', 'Eve']);
    expect(actual).toEqual(['Yow Alice', 'Yow Bob', 'Yow Eve']);
  });
});
