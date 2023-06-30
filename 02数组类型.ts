// 声明数组的两种方式
let arr:number[] = [1,2,3,4,5]

let arr2:Array<number> = [1,2,3,4,5] 

// 联合类型
let arr3:(number | String) [] = [1,2,3,4,5,'yfm']  
// 一旦使用联合类型 , 说明arr中的存储的可能是number 也可能是String , 所以会丢失一部分提示信息(只能提示共有的方法属性)

//  联合类型通常会联合null来进行初始声明
let id:number | null = 2

