export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  // throwingSpeed: 154, 当然Batter1はthrowingSpeedを持っていないのでコンパイルエラーになる
  battingAverage: 0.367,
};

// 両方の情報を持つオブジェクトを作りたいとき、こんなことをやる必要はない
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
