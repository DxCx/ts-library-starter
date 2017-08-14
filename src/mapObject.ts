import reduceObject from './reduceObject';

/**
 * Maps over the keys of an object converting the values of 
 * those keys into new objects. The return value will be an object 
 * with the same set of keys, but a different set of values. E.g.
 *
 * > mapObject({first: 1, second: 2}, (key, value)=> value *2)
 *
 *   {first: 2, second: 4}
 */
export default function mapObject(
  object: {},
  fn: (key: string, value: any) => any
) {
  return reduceObject(object, function(result, name, value) {
    return {
      ...result,
      [name]: fn(name, value)
    };
  });
}
