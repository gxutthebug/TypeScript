// 注意:函数的类型别名只能给函数表达式 或者 箭头函数使用. 
type fnType = (a:number , b:number) => number


const sub:fnType =  (a,b) => {
    return a- b
}


const sub2:fnType = function(a,b) {
    return  a- b
}