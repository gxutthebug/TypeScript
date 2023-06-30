// 字符串类型(也可以使用es6的字符串模板)
let a: string = '123'
let str: string = `dddd${a}`





// 数字类型
let notANumber: number = NaN; // Nan
let num: number = 123;//普通数字
let binary: number = 0b1010;//二进制




//  Boolean 类型 
let booleand: boolean = true //可以直接使用布尔值


// undefined 类型
let aa:undefined = undefined


// null类型
let bb:null = null





let u: void = undefined
// let n: void = null;
 

// 与 void 的区别是: 非严格模式下undefined 和 null 是所有类型的子类型。也就是说 undefined / null类型的变量，可以赋值给 string 类型的变量：
// 这样写会报错 void类型不可以分给其他类型
let test: void = undefined
let num2: string = "1"
//  num2 = test

// let cc: number = 4
// cc = undefined
// cc = null