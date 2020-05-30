export {};

let dayOfTheWeek: '日曜日' | '月曜日' = '日曜日';
dayOfTheWeek = '月曜日'; //入る
// dayOfTheWeek = 'tama' ちゃんと弾く

let month = 1;
month = 13; // 13月はエラーにしたい。

let month2: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
// month2 = 13; 弾く。

let TRUE: true = true;
// TRUE = false; 弾く。これはほぼ使わないと思う……