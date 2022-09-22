/**
 * Interleaves 2 arrays
 * @internal
 * @param a first array
 * @param b second arry
 * @returns array with interleaved elements
 */
export function interleaveArrays(a: any[], b: any[]): any[] {
  let arr: any[] = [];
  let observed = a;
  let other = b;
  let temp: null | any[] = null;
  while (observed.length > 0) {
    arr.push(observed.shift());
    temp = observed;
    observed = other;
    other = temp;
  }
  if (other.length > 0) arr.push(...other);
  return arr;
}
