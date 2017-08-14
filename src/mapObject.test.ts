'use strict';

import 'jest';
require('babel-core/register');
require('babel-polyfill');

import mapObject from './mapObject';

describe('mapObject', () => {
  const original = { first: 1, second: 2 };
  let callback, result;

  describe('callback use', () => {
    beforeEach(() => {
      callback = jest.fn();
      result = mapObject(original, callback);
    });

    it('was called twice', () => {
      expect(callback.mock.calls.length).toEqual(2);
    });

    it('was called with key and value', () => {
      expect(callback.mock.calls[0]).toEqual(['first', 1]);
      expect(callback.mock.calls[1]).toEqual(['second', 2]);
    });
  });

  describe('result', () => {
    beforeEach(() => {
      result = mapObject(original, (key, value) => value * 2);
    });

    it('returns a new object', () => {
      expect(original).not.toEqual(result);
    });

    it('returns a hash with result of the callback', () => {
      expect(result).toEqual({ first: 2, second: 4 });
    });
  });
});
