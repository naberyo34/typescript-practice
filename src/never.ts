export {};

// 実行された瞬間に例外を投げる
const error = (message: string): never => {
  throw new Error(message);
};

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}
