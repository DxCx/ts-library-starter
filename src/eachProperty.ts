const { keys } = Object;
/**
 * Invoke callback for each property and pass key and value to each property.
 * 
 * eachProperty({ a: 'b', c: 'd'}, (key, value) => console.log(key, value)})
 * // ab
 * // cd
 * 
 * @param object {}
 * @param fn: (key: string, value: any) => any
 */
export default function eachProperty(
  object: {},
  fn: (key: string, value: any) => any
): void {
  if (typeof object === 'object') {
    keys(object).forEach(function(key) {
      fn(key, object[key]);
    });
  }
}
