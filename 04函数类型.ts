
// 在js中可以使用以下方式定义函数 ， 但ts中不行 , 因为ts要求我们必须给参数参数定义类型 . 
// 如果是严格模式你参数不指定类型会默认为any类型 , 但是严格模式下连any都必须显示声明


// function add (a,b) {
//     return a+ b
// }



// 但是返回值又不用必须指定类型  , 因为返回值ts可以自动推断
function add (a:number , b:number):number{
    return a+ b
}

function add2 (a:number , b:number){  // 返回值可以自动推断
    return a+ b
}



// 函数表达式
const fn  = function add3 (a:number , b:number):number{
    return a+ b
}

// 箭头函数
// 注意！: 在js中箭头函数只有一个参数时 , 可以省略小括号 ,  ts中不行了(因为现在你的参数要写类型了)
const fn2 =  (a:number , b:number):number =>{
    return a+ b
}