export default function interleaveArrays(a: any[], b: any[]): any[] {
  let arr: any[] = [];
  let observed = a;
  let other = b;
  let temp: null | any[] = null;
  while (observed.length > 0) {
    arr.push(observed.shift())
    temp = observed;
    observed = other;
    other = temp;
  }
  if (other.length > 0) arr.push(...other);
  return arr;
}