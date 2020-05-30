export {};

let profile1: object = { name: 'tama' };
profile1 = { year: 1996 }; // 普通に再代入できてしまう nameは消える

console.log(profile1);

let profile2: { name: string } = { name: 'tama' };
// profile2 = { year: 1996 }; これはできない
profile2 = { name: 'nabe' }; // これはできる

console.log(profile2);
