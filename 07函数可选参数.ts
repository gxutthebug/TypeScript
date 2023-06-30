// 在js定义函数时如果定义了形参 , 调用函数可以不传实参 ，非常灵活
// 但是在ts中 定义了形参 , 调用时必须传入实参 , 否则会报错
// 如果想要在ts中实现跟js一样的参数可选 , 要加一个?


// 注意:! 必选参数不能位于可选参数后面 , 你不能第一个加问号 然后第二个不加
const myprint = (name:string , gender?:string): void => {
    console.log(name)
    console.log(gender)
}