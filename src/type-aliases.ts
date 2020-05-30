export {};

// type は型エイリアスを作る手段 名前はアッパーキャメルケース
type Mojiretsu = string;

let str: Mojiretsu = 'foo';
// str = 1; できない ちゃんと効いてる

type Profile = {
  name: string;
  age: number;
}

let profile1: Profile = { name: 'tama', age: 24};
// profile1.name = 100; ちゃんと弾かれる

let example = { foo: 1, bar: '2'};

type Example = typeof example;

let example2: Example = {foo: 3, bar: '4'};