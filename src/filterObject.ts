import reduceObject from './reduceObject';

/**
 * Create a new hash with keys and their corresponding values 
 * removed based on result of callback operation. E.g.
 * 
 * filterObject({ small: 1, smallish: 2, big: 4}, (key, value) => value < 3 })
 *  
 *  { small: 1, smallish: 2 } 
 * 
 * @param object 
 * @param fn 
 */
export default function filterObject(object: {}, fn: (key, value) => boolean) {
  return reduceObject(
    object,
    (result, key, value) => {
      if (fn(key, value)) {
        return {
          ...result,
          [key]: value
        };
      }
      return result;
    },
    {}
  );
}
