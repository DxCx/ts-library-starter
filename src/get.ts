import * as lensPath from 'ramda/src/lensPath';
import * as view from 'ramda/src/view';

export default function get(
  path: Array<string | number>,
  data: {} | Array<any>
) {
  let lens = lensPath(path);
  return view(lens, data);
}
