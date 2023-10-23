/* eslint-disable no-undef */
import { emptyArray } from './game2.js';

describe('Given array', () => {
  test(() => {
    const testData = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    const rounds = 2;
    const rows = 3;
    const expected = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];
    const result = emptyArray(testData, rounds, rows);
    expect(result).toStrictEqual(expected);
  });
});
