'use strict';

import 'jest';
require('babel-core/register');
require('babel-polyfill');

import set from './set';

describe('set', () => {
  let result;

  describe('object', () => {
    const original = { a: { b: { c: 'd' }, d: 'e' }, f: 'g' };

    describe('shallow path', () => {
      beforeEach(() => {
        result = set(['a'], 'z', original);
      });

      it(`returns a value that's not undefined`, () => {
        expect(result).not.toBeUndefined();
      });

      it('returns a new object', () => {
        expect(result).not.toEqual(original);
      });

      it('returns the result', () => {
        expect(result).toEqual({ a: 'z', f: 'g' });
      });
    });

    describe('deep path', () => {
      beforeEach(() => {
        result = set(['a', 'b', 'c'], 'z', original);
      });

      it(`returns new objects all the way to the replaced value`, () => {
        expect(result.a).not.toEqual(original.a);
        expect(result.a.b).not.toEqual(original.a.b);
      });

      it('return the result', () => {
        expect(result).toEqual({ a: { b: { c: 'z' }, d: 'e' }, f: 'g' });
      });
    });
  });

  describe('array', () => {
    const original = [{ a: { b: { c: 'd' } } }, { d: { e: 'g' } }];

    beforeEach(() => {
      result = set([0, 'a', 'b', 'c'], 'z', original);
    });

    it('returns new objects all the way through', () => {
      expect(result[0]).not.toEqual(original[0]);
      expect(result[0].a.b).not.toEqual(original[0].a.b.c);
    });

    it('returns expected result', () => {
      expect(result).toEqual([{ a: { b: { c: 'z' } } }, { d: { e: 'g' } }]);
    });
  });
});
