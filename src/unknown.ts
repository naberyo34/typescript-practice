export {};

// ただ数値をreturnするだけの関数
const func = (): number => 24;

let numAny: any = func();
let numUnknown: unknown = func();

let subAny = numAny + 10;
console.log(typeof numUnknown); // number

if (typeof numUnknown === 'number') {
  let subUnknown = numUnknown + 10;
  console.log(subUnknown);
}
