export {};

// Type Aliasで書く場合 「別名」なのでイコールがつく
// type ObjectType = { name: string; age: number };

// interfaceで書く場合 この場合もアッパーキャメルケースで書く
// イコールを書かない点に注意
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'tama',
  age: 24,
};

console.log(object);
