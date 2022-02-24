/**
 * const, letの変数宣言
 */
//

// let val2 = "let変数";
// console.log(val2);

// val2 = "上書き";
// console.log(val2);

// let val2 = "さいへんげん";

// const val3 = "const数";
// console.log(val3);

// constで定義したオブジェクトのプロパティは変更可能
// const val4 = {
//   name: "ジャケ",
//   age: 28,
// }

// console.log(val4);

// val4.name = "ok";
// val4.address = "hokkaido";
// console.log(val4);

// constで定義した配列もプロパティは変更可能

// const val5 = ['dog','cat'];
// console.log(val5);

// val5[0] = 'dig';
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ジャケ";
// const age = 28;
//私の名前はジャケです。年齢は28です。

//従来方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 =`私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// //従来方法
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func2_2 = (str) => str;
// console.log(func2_2("func3です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(3, 4));

// console.log(func3(30, 4));

/**
 * 分割代入
 */

// const myprofile = {
//   name: "ジャケ",
//   age: 28,
//   }
// //私の名前はジャケです。年齢は28です。

// //従来方法
// const message1 = `私の名前は${myprofile.name}です。年齢は${myprofile.age}です。`;
// console.log(message1);

// //分割代入
// const { name, age} = myprofile;
// const message2 = `名前は${name}です。年齢は${age}です`

// const myprofile = ["ジャケ", 28];
// const [name,age] = myprofile;
// const message3 = `私の名前は${name}で年齢は${age}です`;
// console.log(message3);

/**
 * デフォルト値
 */

//  const sayhello = (name = "テスト") => console.log(`こんにちは${name}さん`);
//  sayhello()
