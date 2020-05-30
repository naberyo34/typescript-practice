export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);

enum Colors {
  Red = '#ff0000',
  White = '#fff',
  Green = '#00ff00',
}

let green = Colors.Green;

console.log(Colors.Green); // #00ff00

// console.log(Colors.Yellow); エラー

enum Colors {
  Yellow = '#ffff00', // 追加が別の場所からできてしまう
}

console.log(Colors.Yellow); // 気持ち悪い気もする