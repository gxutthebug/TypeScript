// 注意！: 在TS中一切对象可选属性都不能直接 obj.xxx去操作
// 而是要先判断 if(obj.xxx){} 先判断xxx属性是否存在才能去操作 , 直接操作ts会报错
// 写得优雅一点就是 obj.xxx && obj.xxx的操作
//   更优雅一点就是 最新的语法 ====>  obj.xxx ?.fn()  , 比如 obj3.girlFriend?.concat()

type persen2 = {
    name:string,
    age:number,
    girlFriend?:string,  //  可选属性
    gender:string,
    hobby: string,
    sayHi?:(content: string) => void,  // 可选函数方法 (要写成 fnName ?: () => xxx 的形式)
    sayHi2(content: string) :void
}

let obj3:persen2 = {
    name:"yfm",
    age:18,
    girlFriend:"wql",
    gender:"男",
    hobby:"前端",
    sayHi2(content) {
        console.log(content)
    }
}



// 在axios那个形参对象中method data就是一个可选属性 , 可以不指定(method不传就是默认"GET")

// axios({
//     url:'',
//     method:"GET"    
//     data:{}
// })