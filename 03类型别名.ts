{
type ArrayType = (number | string)[]

let arr1 :ArrayType =  [1,2,3,4,5,'yfm']  


type ItemType = number | string
let str:ItemType = "YFM"
let arr2: ItemType[] =  [1,2,3,4,5,'yfm']   // 还可以这样与[] 搭配使用 (arr2 的类型与 arr1 等效)



console.log(arr1,arr2,str)

// 还可以这样玩
// type n = number
// type s = string
}