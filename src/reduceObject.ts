import eachProperty from './eachProperty';

/**
 * Produce one value after iterating over all keys and their correspo
 * @param object 
 * @param fn 
 * @param result 
 */
export default function reduceObject(
  object: {},
  fn: (result: any, key: string, value: any) => any,
  result: any = {}
) {
  eachProperty(object, function(name, value) {
    result = fn(result, name, value);
  });
  return result;
}
