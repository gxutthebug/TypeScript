// 字符串类型
var a = '123';
//也可以使用es6的字符串模板
var str = "dddd".concat(a);
console.log(a, str);
// 数字类型
var notANumber = NaN; //Nan
var num = 123; //普通数字
var infinityNumber = Infinity; //无穷大
var decimal = 6; //十进制
var hex = 0xf00d; //十六进制
var binary = 10; //二进制
var octal = 484; //八进制s
console.log(notANumber, num);
//这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象 
//let createdBoolean: boolean = new Boolean(1)
var booleand = true; //可以直接使用布尔值
var booleand2 = Boolean(1); //也可以通过函数返回布尔值
function voidFn() {
    console.log('test void');
}
// void 类型用于表示没有任何类型,通常作为函数没有返回值的类型标注。TypeScript 默认不允许将 null 赋值给 void 类型的变量
// 当你在项目的根目录下添加一个空的 tsconfig.json 文件时，TypeScript 会使用默认的编译选项。
// 这些默认选项中可能允许了将 null 赋值给 void 类型的变量，因此错误消失了。
// 如果你配置了tsconfig.json 开启了严格模式   null 不能 赋予 void 类型 
var u = undefined;
var n = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：
// 这样写会报错 void类型不可以分给其他类型
var test = undefined;
var num2 = "1";
// num2 = test
